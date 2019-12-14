import { GET_DECKS } from './types'
import { _saveDeckTitle, _getDecks } from '../utils/api'

export function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks,
    }
}

export function handleSaveDeckTitle (title) {
    return (dispatch) => {
        return _saveDeckTitle(title)
            .then((decks) => {
                dispatch(getDecks(decks))
            })
    }
}

export function handleInitialData () {
    return (dispatch) => {
        return _getDecks()
            .then((decks) => {
                dispatch(getDecks(decks))
            })
    }
}