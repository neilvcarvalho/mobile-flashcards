import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardFront from './CardFront'
import CardBack from './CardBack'
import QuizResults from './QuizResults'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

function Quiz ({ route, navigation }) {
  const { deck } = route.params
  const FRONT = 'front'
  const BACK = 'back'
  const RUNNING = 'running'
  const FINISHED = 'finished'

  const [question, setQuestion] = useState(1)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [quizState, setQuizState] = useState(RUNNING)
  const [side, setSide] = useState(FRONT)
  const questions = deck.questions
  const quizLength = questions.length
  const currentQuestion = questions[question - 1]

  const flip = () => {
    setSide(side === FRONT ? BACK : FRONT)
  }

  const answerCorrect = () => {
    setCorrectAnswers(correctAnswers + 1)
    nextQuestion()
  }

  const nextQuestion = () => {
    setSide(FRONT)

    if (question === quizLength) {
      finishQuiz()
    } else {
      setQuestion(question + 1)
    }
  }

  const finishQuiz = () => {
    setQuizState(FINISHED)
    clearLocalNotification().then(setLocalNotification)
  }

  const restartQuiz = () => {
    setQuestion(1)
    setCorrectAnswers(0)
    setQuizState(RUNNING)
    setSide(FRONT)
  }

  if (quizState === FINISHED) {
    return (
      <QuizResults
        correctAnswers={correctAnswers}
        quizLength={quizLength}
        restartQuiz={restartQuiz}
        navigation={navigation} />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text>{question}/{quizLength}</Text>
        </View>

        {
          side === FRONT
          ? <CardFront currentQuestion={currentQuestion} flip={flip} />
          : <CardBack currentQuestion={currentQuestion} flip={flip} answerCorrect={answerCorrect} nextQuestion={nextQuestion} />
        }
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%'
  },
  header: {
    alignItems: 'flex-end',
    flexDirection: 'column'
  },
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    justifyContent: 'space-between'
  }
})

export default Quiz