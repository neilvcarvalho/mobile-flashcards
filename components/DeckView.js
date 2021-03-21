import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'

function DeckView ({ deck, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.deckGroup}>
        <Text style={styles.deckTitle}>{deck.title}</Text>
        <Text style={styles.deckDescription}>
          {deck.questions.length} card{deck.questions.length != 1 ? 's' : ''}
        </Text>
      </View>

      <View style={styles.buttonGroup}>
        <Button onPress={() => { navigation.navigate('Add Card', { deck: deck }) }}>Add Card</Button>
        <Button disabled={deck.questions.length === 0} mode='contained'>Start Quiz</Button>
      </View>
    </View>
  )
}

function mapStateToProps(decks, { navigation, route }) {
  const deck = decks[route.params.title]

  return {
    deck,
    navigation
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
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
    margin: '5%'
  },
  buttonGroup: {
    flex: 1,
    margin: '5%',
    justifyContent: 'space-evenly'
  }
})

export default connect(mapStateToProps)(DeckView)