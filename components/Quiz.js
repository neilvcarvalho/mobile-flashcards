import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

function Quiz ({ route }) {
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text>{question}/{quizLength}</Text>
        </View>

        <View style={styles.cardQuestion}>
          {
            quizState === RUNNING
            ? <Text style={styles.questionText}>{side === FRONT ? currentQuestion.question : currentQuestion.answer}</Text>
            : <Text style={styles.questionText}>You have answered correctly {correctAnswers} questions out of {quizLength}</Text>
          }

        </View>

        <View style={styles.buttonGroup}>
          <Button onPress={() => { flip() }}>{side === FRONT ? 'View answer' : 'View question'}</Button>
          <Button color='green' mode='contained' onPress={() => { answerCorrect() } }>Correct</Button>
          <Button color='red' mode='contained' onPress={() => { nextQuestion() }}>Incorrect</Button>
        </View>
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

export default Quiz