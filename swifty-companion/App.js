import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import AuthProvider from "./store/authProvider";
import Routes from './screens/Routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#00C4FF" hidden={false} />
        <Routes loaded={loaded} setLoaded={setLoaded} />
      </SafeAreaView>
    </AuthProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});


