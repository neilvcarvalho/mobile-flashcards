import { getDecks, saveDeck } from "../utils/store"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function handleInitialData () {
  return (dispatch) => {
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(JSON.parse(decks || '{}')))
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