import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'mobile-flashcards:decks'

export async function saveDeck (title) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export async function getDecks () {
  const decks = await AsyncStorage.getItem(STORAGE_KEY)

  if (decks === null) {
    AsyncStorage.setItem(STORAGE_KEY, '{}')
  }

  return (decks === null) ? {} : JSON.parse(decks)
}

export async function saveQuestion (deckTitle, cardQuestion, cardAnswer) {
  const decks = await getDecks()

  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deckTitle]: {
      questions: [
        ...decks[deckTitle].questions,
        {
          question: cardQuestion,
          answer: cardAnswer
        }
      ]
    }
  }))
}