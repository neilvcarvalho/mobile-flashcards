import React from 'react'
import { Text, StyleSheet } from 'react-native'

function RequiredField ({ value, label }) {
  return (
    value === '' && <Text style={styles.requiredLabel}>* {label} is required</Text>
  )
}

const styles = StyleSheet.create({
  requiredLabel: {
    fontSize: 12,
    color: 'gray'
  }
})

export default RequiredField