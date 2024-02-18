import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from "axios";
// import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";
// require('dotenv').config();
const Login = () => {
    const [login, setLogin] = useState('');
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URL = process.env.REDIRECT_URL;
    const TOKEN_URL = "https://api.intra.42.fr/oauth/token";
    const GRANT_TYPE = "client_credentials";

    const onPressLogin = async () => {
        // Handle login logic
        console.log(CLIENT_SECRET, CLIENT_ID)
        const data = await axios.post(TOKEN_URL, {
            grant_type: GRANT_TYPE,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        });

        const response = await fetch('https://api.intra.42.fr/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            })
        })

        console.log(data)
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/1337.png')}
                resizeMode="contain"
            />
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter your username"
                value={login}
                onChangeText={setLogin}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={onPressLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    loginText: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 10,
    },
    image: {
        width: '90%',
        height: 100,
        marginBottom: 20,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        color: '#333333',
    },
    buttonStyle: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#000000',
        borderWidth: 0.5,
        borderColor: '#CCCCCC',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center',
    },
});

export default Login;
