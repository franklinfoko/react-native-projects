import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Create = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitData = () => {
    fetch("http://192.168.1.41:3000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        value={title}
        mode="outlined"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Enter body"
        style={styles.input}
        value={body}
        mode="outlined"
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setBody(text)}
      />
      <Button
        style={styles.button}
        title="Submit"
        icon="pencil"
        mode="contained"
        onPress={() => submitData()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    marginTop: 30,
    borderBlockColor: "black",
  },
  button: {
    margin: 15,
  },
});

export default Create;
