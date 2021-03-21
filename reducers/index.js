import { ADD_CARD, ADD_DECK, RECEIVE_DECKS } from "../actions"

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD :
      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          questions: [
            ...state[action.deckTitle].questions,
            {
              question: action.cardQuestion,
              answer: action.cardAnswer
            }
          ]
        }
      }
    default :
      return state
  }
}

export default decks