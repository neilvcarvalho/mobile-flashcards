import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export default function LoadingView () {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="'rgb(98, 0, 238)'" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})