import React from 'react'
import { View, Text } from 'react-native'

function AddCard ({ route }) {
  console.log('Route', route)
  const { deck } = route.params

  return (
    <View>
      <Text>Add deck to {deck.title}</Text>
    </View>
  )
}

export default AddCard