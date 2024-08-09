import React from 'react';
import { View, StyleSheet } from 'react-native';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  tentatives: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;