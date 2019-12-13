import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export function getDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
}