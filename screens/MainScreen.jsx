//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import DropDown from "../components/DropDown";
import GenderSelection from "../components/GenderSelection";
import SubmitButton from "../components/SubmitButton";
import * as ImagePicker from "expo-image-picker";

// create a component
const MainScreen = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      mobile: "",
      gender: gender,
    },
  });

  const [image, setImage] = useState(null);

//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

  const onSubmit = (data) => {
    navigation.navigate("details", { data:{...data,gender:gender} });
  };

  console.log(image)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Task 28-03-2023</Text>
        <TouchableOpacity style={styles.profile}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100,}}
            />
          ) : (
            <Text>Profile pic</Text>
          )}
        </TouchableOpacity>

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              label={"First Name"}
              placeholder={"Enter your First name"}
              error={errors.firstName && "Please Enter your first name"}
              keyboardType="default"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="firstName"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 3,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              label={"Last Name"}
              placeholder={"Enter your Last name"}
              error={errors.lastName && "Please Enter your last name"}
              keyboardType="default"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="lastName"
        />

        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              label={"Email Id"}
              placeholder={"Enter your Email address"}
              error={errors.email && "Please Enter your email address"}
              keyboardType="default"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 10,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              label={"Mobile"}
              placeholder={"Enter your mobile number"}
              error={errors.mobile && "Please Enter your mobile number"}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="mobile"
        />

        <DropDown setGender={setGender} />

        <Controller
          control={control}
          rules={{
            required: true,
            min: 18,
            max: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextInput
              label={"Age"}
              placeholder={"Enter your Age"}
              error={errors.age && "Please Enter your age"}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
          )}
          name="age"
        />

        <SubmitButton onPress={handleSubmit(onSubmit)} />
      </ScrollView>
      <StatusBar animated barStyle={"dark-content"} backgroundColor={"white"} />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "500",
  },
  profile: {
    backgroundColor: "grey",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderColor: "cyan",
    borderWidth: 0.5,
  },
});

//make this component available to the app
export default MainScreen;
