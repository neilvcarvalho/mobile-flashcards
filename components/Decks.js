import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Decks (props) {
  const { decks } = props

  return (
    <View style={styles.container}>
      {Object.keys(decks).map((deckId) => {
        const deck = decks[deckId]

        return (
          <TouchableOpacity key={deck.title} style={styles.deck}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Text style={styles.deckDescription}>
              {deck.questions.length} card{deck.questions.length != 1 ? 's' : ''}
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
    backgroundColor: 'rgb(98, 0, 238)',
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

export default Decks