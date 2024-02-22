import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useAuthRequest } from 'expo-auth-session'
import { useAuthContext } from "../store/authProvider";
import { fetchUser } from '../utils/searchUsers';

const Search = ({ navigation }) => {
    const [login, setLogin] = useState('amya');
    let { state, dispatch } = useAuthContext();
    console.log("we r in search")



    const hundleSearch = async () => {
        console.log('login', login)
        const res = await fetchUser(login.trim(), dispatch)
        navigation.navigate("profile", res);
        //    console.log(res)
    };
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/1337.png')}
                resizeMode="contain"
            />
            <Text style={styles.loginText}>Search user</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter user login"
                value={login}
                onChangeText={setLogin}
            />
            <TouchableOpacity style={styles.buttonStyle} onPress={hundleSearch}>
                <Text style={styles.buttonText}>Search</Text>
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

export default Search;
