import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Edit = ({ navigation, route }) => {
    const { data } = route.params;
    const [title, setTitle] = useState(data.title);
    const [body, setBody] = useState(data.body);

    const updateData = () => {
        fetch(`http://192.168.1.41:3000/update/${data.id}`, {
            method: "PUT",
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
                alert("Updated");
                navigation.navigate("Home");
            })
            .catch((err) => {
                console.log(err);
        })
    }
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
                
                style={styles.input}
                value={body}
                mode="outlined"
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => setBody(text)}
            />
            <Button
                style={styles.button}
                title="Update"
                icon="pencil"
                mode="contained"
                onPress={() => updateData()}
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

export default Edit;
