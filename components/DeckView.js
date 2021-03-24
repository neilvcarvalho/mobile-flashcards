import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import LoadingView from './LoadingView'

function DeckView ({ deck, navigation }) {
  if (deck === undefined) {
    return (
      <LoadingView />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.deckGroup}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>
          {deck.questions.length} card{deck.questions.length != 1 ? 's' : ''}
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button
          onPress={() => { navigation.navigate('Add Card', { deck: deck }) }}
        >Add Card</Button>
        <Button
          onPress={() => { navigation.navigate('Quiz', { deck: deck }) }}
          disabled={deck.questions.length === 0}
          mode='contained'
        >Start Quiz</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    margin: '5%',
  },
  deckTitle: {
    fontSize: 30
  },
  deckDescription: {
    color: 'gray'
  },
  deckGroup: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-evenly'
  }
})

function mapStateToProps(decks, { navigation, route }) {
  const deck = decks[route.params.title]

  return {
    deck,
    navigation
  }
}

export default connect(mapStateToProps)(DeckView)