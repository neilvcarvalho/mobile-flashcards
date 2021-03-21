import { getDecks, saveDeck, saveQuestion } from "../utils/store"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function handleInitialData () {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
  }
}

export function handleAddDeck (title) {
  return (dispatch) => {
    return saveDeck(title)
      .then(() => {
        dispatch(addDeck(title))
      })
  }
}

export function handleAddCard (deckTitle, cardQuestion, cardAnswer) {
  return (dispatch) => {
    return saveQuestion(deckTitle, cardQuestion, cardAnswer)
      .then(() => {
        dispatch(addCard(deckTitle, cardQuestion, cardAnswer))
      })
  }
}

function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

function addCard (deckTitle, cardQuestion, cardAnswer) {
  return {
    type: ADD_CARD,
    deckTitle,
    cardQuestion,
    cardAnswer
  }
}