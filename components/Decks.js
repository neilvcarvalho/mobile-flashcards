import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Decks () {
  const decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

  return (
    <View style={styles.container}>
      {Object.keys(decks).map((deckTitle) => {
        const deck = decks[deckTitle]
        return (
          <TouchableOpacity key={deck.title} style={styles.deck}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.deckDescription}>
              {deck.questions.length} card{deck.questions.length > 1 ? 's' : ''}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deck: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  deckTitle: {
    color: 'white',
    fontSize: 20
  },
  deckDescription: {
    color: 'lightgray'
  }
})