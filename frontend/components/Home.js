import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, FAB } from "react-native-paper";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    fetch("http://192.168.1.41:3000/get", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((article) => {
        setData(article);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
    })
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    fetch("http://192.168.1.41:3000/get", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((article) => {
        setData(article);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clikedItem = (data) => {
    navigation.navigate("Details", { data: data });
  }

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle}>
        <Text style={{ fontSize: 25                }} onPress={() => clikedItem(item)}>{item.title}</Text>
      </Card>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderData(item);
        }}
        onRefresh={() => loadData()}
        refreshing={loading}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        theme={{ colors: { accent: "green" } }}
        onPress={() => navigation.navigate("Create")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardStyle: {
    margin: 10,
    padding: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
