import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export const getDecks = async() => {
    const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return JSON.parse(decks)
}

export const saveDeckTitle = async(title) => {
    const deck = {
        title,
        questions: []
    }

    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: deck,
    }))

    return await getDecks()
}