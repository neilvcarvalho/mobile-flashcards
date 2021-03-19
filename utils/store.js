import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'mobile-flashcards:decks'

export function addDeck (title) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function getDecks () {
  return AsyncStorage.getItem(STORAGE_KEY)
}