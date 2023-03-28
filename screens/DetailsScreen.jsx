//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const DetailsScreen = ({ route, navigation }) => {
  const data = route?.params.data;
  console.log(data);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
      <Text style={{ marginTop: 25 }}>
        First Name: <Text style={{ fontSize: 20 }}>{data?.firstName}</Text>
      </Text>
      <Text style={{ marginTop: 10 }}>
        Last Name: <Text style={{ fontSize: 20 }}>{data?.lastName}</Text>
      </Text>
      <Text style={{ marginTop: 10 }}>
        Age: <Text style={{ fontSize: 20 }}>{data?.age}</Text>
      </Text>
      <Text style={{ marginTop: 10 }}>
        Mobile: <Text style={{ fontSize: 20 }}>{data?.mobile}</Text>
      </Text>
      <Text style={{ marginTop: 10 }} numberOfLines={1}>
        Email:{" "}
        <Text style={{ fontSize: 20 }} numberOfLines={1}>
          {data?.email}
        </Text>
      </Text>
      <Text style={{ marginTop: 10 }}>
        Gender: <Text style={{ fontSize: 20 }}>{data?.gender}</Text>
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9684b1",
    paddingHorizontal: "10%",
  },
  heading: {
    marginTop: 25,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "500",
  },
});

//make this component available to the app
export default DetailsScreen;
