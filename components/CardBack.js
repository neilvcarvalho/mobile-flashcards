import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

function CardBack ({ flip, currentQuestion, answerCorrect, nextQuestion }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardAnswer}>
        <Text style={styles.questionText}>{currentQuestion.answer}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button onPress={() => { flip() }}>View question</Button>
        <Button color='green' mode='contained' onPress={() => { answerCorrect() } }>Correct</Button>
        <Button color='red' mode='contained' onPress={() => { nextQuestion() }}>Incorrect</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardAnswer: {
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

export default CardBack