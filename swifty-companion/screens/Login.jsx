import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from "axios";
import { useAuthRequest } from 'expo-auth-session'
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URL } from "@env";
import { useAuthContext } from "../store/authProvider";

const Login = ({navigation}) => {
    const [login, setLogin] = useState('');
    let {state, signIn, signOut } = useAuthContext();
useEffect(()=>{
console.log('state now' , state)
},[])
    const [request, response, promptAsync] = useAuthRequest({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URL,
        scopes: ['public']
    }, {
        authorizationEndpoint: 'https://api.intra.42.fr/oauth/authorize',
        tokenEndpoint: 'https://api.intra.42.fr/oauth/token'
    });

    const onPressLogin = async () => {
        try {
            console.log('signIn')
            let res = await promptAsync()
            await signIn(res.params.code)
            
        } catch (error) {
            
            console.log("error:", error)
        }

    };
    const logmeout = () => {
        signOut()
    }
    useEffect(()=>{
        if (state && state.token)
        navigation.navigate("search");

        else
        console.log('token is not set')

    },[state.token])
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
            <TouchableOpacity style={styles.buttonStyle} onPress={logmeout}>
                <Text style={styles.buttonText}>Logout</Text>
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
