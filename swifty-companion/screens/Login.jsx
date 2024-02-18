import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from "axios";
import * as AuthSession from 'expo-auth-session';
import { useAuthRequest } from 'expo-auth-session'

const Login = () => {
    const [login, setLogin] = useState('');
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URL = process.env.REDIRECT_URL;
    const TOKEN_URL = "https://api.intra.42.fr/oauth/token";
    const GRANT_TYPE = "client_credentials";
    const [request, response, promptAsync] = useAuthRequest({
        clientId: 'u-s4t2ud-39aa9f9b58203c505a6088ead6040a1130f86d88712c92ae8da0694a700aad52',
        clientSecret: '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',
        redirectUri: 'exp://8bz5ypq-anonymous-8081.exp.direct',
        scopes: ['public']
    }, {
        authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
        tokenEndpoint: 'https://api.intra.42.fr/oauth/token'
    });

    const onPressLogin = async () => {
        let c = await promptAsync()
        const { code } = c.params;
        try {
            const tokenResponse = await axios.post('https://api.intra.42.fr/oauth/token', {
                client_id: 'u-s4t2ud-39aa9f9b58203c505a6088ead6040a1130f86d88712c92ae8da0694a700aad52',
                redirect_uri: 'exp://8bz5ypq-anonymous-8081.exp.direct',
                code: code,
                grant_type: 'authorization_code',
                client_secret: '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', // Only required for some OAuth providers
            });
            const { access_token, refresh_token, expires_in } = tokenResponse.data;
            // Now you have access_token, refresh_token, and expires_in     
            // You can store these tokens securely in your app

            console.log("=>", access_token)
        } catch (error) {
            console.error('Error exchanging code for token:', error);
        }
        // }
        // Handle login logic
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
