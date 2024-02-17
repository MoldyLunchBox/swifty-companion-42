import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ setLoaded }) => {
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require("../assets/1337_loading.png")}
                resizeMode="cover"
            >
                {/* Your content here */}
            </ImageBackground>
        </View>
    )
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: screenWidth,
        height: screenHeight,
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
    },
});

export default Splash;
