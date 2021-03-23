import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

function QuizResults ({ correctAnswers, quizLength, restartQuiz, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>
          You have answered correctly {correctAnswers} out of {quizLength} questions.
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button onPress={restartQuiz}>Restart Quiz</Button>
        <Button onPress={() => { navigation.goBack() }}>Back to Deck</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%'
  },
  result: {
    flex: 2,
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 18
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
})

export default QuizResults