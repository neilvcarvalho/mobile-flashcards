import React from 'react'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

function CustomStatusbar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default CustomStatusbar