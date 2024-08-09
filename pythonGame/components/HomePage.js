import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import GamePage from './components/GamePage';
import HomePage from './components/HomePage';


const HomePage = () => {
    
    return (
        <View style={styles.container}>
            <Text>Jeu de devinette Python</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('GamePage')}>
                <Text style={styles.buttonText}>Commencer</Text>
            </Pressable>
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
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'blod',
    },
});

export default HomaPage;