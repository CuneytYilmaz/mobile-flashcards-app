import { GET_DECKS } from './types'

export function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}