import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const GamePage = () => {
    const [message, setMessage] = useState('');
    const [proposition, setProposition] = useState('');
    const [tentativesRestantes, setTentativesRestantes] = useState(3);

    useEffect(() => {
        axios.get('http://192.168.1.42:5000/start')
            .then(response => {
                setMessage(response.data.message);
                setTentativesRestantes(response.data.tentatives);
            })
            .catch(error => console.error(error));
    }, []);

    const handleGuess = () => {
        axios.post('http://192.168.1.42:5000/guess', { proposition: parseInt(proposition) })
            .then(response => {
                setMessage(response.data.message);
                if (response.data.success) {
                    setTentativesRestantes(3);
                } else {
                    setTentativesRestantes(response.data.tentatives_restantes);
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={proposition}
                onChangeText={setProposition}
            />
            <Button title="Deviner" onPress={handleGuess} />
            <Text style={styles.tentatives}>Tentatives restantes : {tentativesRestantes}</Text>
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

export default GamePage;