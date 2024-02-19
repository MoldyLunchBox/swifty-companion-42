import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native";
import Splash from './screens/Splash';
import { useState } from 'react';
import Vif from './components/Vif';
import Login from './screens/Login';
import  AuthProvider  from "./store/authProvider";

export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#00C4FF" hidden={false} />
        <Vif condition={!loaded}>
          <Splash setLoaded={setLoaded} />
        </Vif>

        <Vif condition={loaded}>
          <Login />
        </Vif>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
