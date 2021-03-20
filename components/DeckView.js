import React from 'react'
import { View, Text } from 'react-native'

function DeckView ({ route, navigation }) {
  return (
    <View><Text>Hello {route.params.title} view</Text></View>
  )
}

export default DeckView