import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Vif from '../components/Vif'
import Splash from './Splash'
import Login from './Login'
import Search from './Search'
import { useAuthContext } from "../store/authProvider";

const Routes = ({loaded, setLoaded}) => {
    const {state} = useAuthContext()

  return (
    <>
    <Vif condition={!loaded}>
          <Splash setLoaded={setLoaded} />
        </Vif>

        <Vif condition={loaded}>
          {
            state.token ?
            <Search />
            :
            <Login />
          }
        
        </Vif>
    </>
  )
}

export default Routes