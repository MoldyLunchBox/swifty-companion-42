import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Vif from '../components/Vif'
import Splash from './Splash'
import Login from './Login'
import Search from './Search'
import { useAuthContext } from "../store/authProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from './Profile'
import Cluster from './Cluster'

const Stack = createNativeStackNavigator();

const Routes = ({ loaded, setLoaded }) => {
  const { state } = useAuthContext()

useEffect(()=>{
  console.log('this is the state', state)
},[state])
  return (
    <>
      <Vif condition={!loaded}>
        <Splash setLoaded={setLoaded} />
      </Vif>

      <Vif condition={loaded  && state}>
      {/* <SafeAreaView> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={`${state.token ? 'cluster' : 'login'}`} screenOptions={{ headerShown: false }}>
            
            <Stack.Screen name="search" component={Search} />
            
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="cluster" component={Cluster} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </SafeAreaView> */}
      </Vif>
    </>
  )
}

export default Routes