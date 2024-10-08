import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Create from './components/Create';
import Contants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from './components/Details';
import Edit from './components/Edit';


const Stack = createStackNavigator();

function App() {
  
  const name = "Franklin Foko"

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </View>
  );
}

export default() => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop: Contants.statusBarHeight,
  },
});
