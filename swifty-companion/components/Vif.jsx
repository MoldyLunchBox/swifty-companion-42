import { View, Text } from 'react-native'
import React from 'react'

/**
 *
 * @param children element to render if condition is met
 * @param condition boolean variable 
 * @return {*} 
 */
export default  function Vif({children, condition})  {
  return (
    condition ? children : null
  )
}

