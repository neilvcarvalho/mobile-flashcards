import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

function CardFront ({ flip, currentQuestion }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardQuestion}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button onPress={() => { flip() }}>View answer</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardQuestion: {
    flex: 3,
    alignItems: 'center'
  },
  questionText: {
    fontSize: 18
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-between',
  }
})

export default CardFront