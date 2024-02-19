import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const Search = () => {
    const [login, setLogin] = useState('')
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/1337.png')}
                resizeMode="contain"
            />
            <View style={styles.inputView}>
            <Text style={styles.loginText}>Search usersss</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search"
                    placeholderTextColor="gray"
                    value={login}
                    onChangeText={(e) => setLogin(e.trim())}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    loginText: {

        fontSize: 24,
        marginTop: 40,
        marginBottom: 10,
    },
    image: {
        width: "90%", // Make the image span the entire width of the screen
        height: 100, // You can adjust the height as needed
        
    },
    inputView:{
        alignItems: 'start',
        justifyContent: 'start',
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
});

export default Search;
