import { View, Text } from "react-native";
import React from "react";

const Home = ({ name }) => {
  return (
    <View>
      <Text>Home</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Home;
