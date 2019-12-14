import { GET_DECKS } from './types'
import { saveDeckTitle } from '../utils/api'

export function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}

export function handleSaveDeckTitle (title) {
    return (dispatch) => {
        return saveDeckTitle(title)
            .then((decks) => {
                dispatch(getDecks(decks))
            })
    }
}