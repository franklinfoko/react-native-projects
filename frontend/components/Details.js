import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";

export default function Details({ route, navigation }) {
  const { data } = route.params;

  const deletData = () => {
      fetch(`http://192.168.1.41:3000/delete/${data.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Deleted");
                navigation.navigate("Home");
            })
            .catch((err) => {
                console.log(err);
      })
  }
  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Text style={{ fontSize: 25 }}>{data.title}</Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}>{data.body}</Text>
        <Text style={{ fontSize: 15, marginTop: 10 }}>{data.date}</Text>

        <View style={styles.btnStyle}>
          <Button
            title="Edit"
            icon="update"
            mode="contained"
            onPress={() => navigation.navigate("Edit", { data: data })}
          />
          <Button
            title="Delete"
            icon="pencil"
            mode="contained"
            onPress={() => deletData()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
    margin: 10,
  },
    btnStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
        padding: 10,
    },
});
