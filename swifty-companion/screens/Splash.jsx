import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ setLoaded }) => {
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 2000)
    }, [])
    return (
        <View>

            <Text>Splash</Text>
        </View>
    )
}

export default Splash