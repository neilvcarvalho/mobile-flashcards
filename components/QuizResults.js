import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

function QuizResults ({ correctAnswers, quizLength, restartQuiz, navigation }) {
  return (
    <View>
      <Text>
        You have answered correctly {correctAnswers} out of {quizLength} questions.
      </Text>

      <Button onPress={restartQuiz}>Restart Quiz</Button>
      <Button onPress={() => { navigation.goBack() }}>Back to Deck</Button>
    </View>
  )
}

export default QuizResults