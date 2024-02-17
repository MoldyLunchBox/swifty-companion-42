import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <Image
        style={styles.image}
        source={require('../assets/1337.png')}
        resizeMode="cover"
      />
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
    marginBottom: 20,
  },
  image: {
    width: "100%", // Make the image span the entire width of the screen
    height: 100, // You can adjust the height as needed
  },
});

export default Login;
