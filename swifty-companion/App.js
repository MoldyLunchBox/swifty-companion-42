import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native";
import Splash from './screens/Splash';
import { useState } from 'react';
import Vif from './components/Vif';

export default function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />
      <Vif condition={!loaded}>
        <Splash setLoaded={setLoaded} />
      </Vif>
      <Vif condition={loaded}>
        <Text>app loaded succesfully</Text>
      </Vif>
    </SafeAreaView>
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
