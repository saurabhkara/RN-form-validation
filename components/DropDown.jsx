import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

export default function DropDown({ setGender }) {
  //   const [gender, setGender] = useState("");

  const data = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Others", value: "Others" },
  ];

  return (
    // <TouchableOpacity style={styles.container}>
    //   <Text style={gender ? [styles.title, { color: "black" }] : styles.title}>
    //     {gender ? gender : "Select Your Gender"}
    //   </Text>
    //   <AntDesign name="down" size={22} color="black" style={{ opacity: 0.7 }} />

    // </TouchableOpacity>
    <View style={styles.wholeContainer}>
      <Text style={[styles.title]}>Gender </Text>
      <SelectList
        data={data}
        setSelected={setGender}
        search={false}
        boxStyles={styles.container}
        placeholder="Please select your gender"
        dropdownStyles={{
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor:'white'
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    wholeContainer:{
        width:'90%',
        alignSelf:'center',
        marginBottom:5,
        zIndex:10
    },
  container: {
    // height: 50,
    width: "100%",
    alignSelf: "center",
    // marginVertical: 10,
    marginBottom:10,
    borderColor: "black",
    borderWidth: 0.5,
    paddingHorizontal: 15,
    backgroundColor: "#dfdfdf",
    fontSize: 17,
    borderRadius: 0,
    // justifyContent:'center',
    alignItems: "center",
    flexDirection: "row",
    zIndex:10,
  },
  title: {
    marginVertical:4
  },
});
