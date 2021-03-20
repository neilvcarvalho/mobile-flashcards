import { getDecks } from "../utils/store"

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

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}