import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

class Deck extends Component {
    toAddCard = (title) => {
        this.props.navigation.navigate(
            'AddCard',
            { deckId: title }
        )
    }

    toStartQuiz = (title) => {
        this.props.navigation.navigate(
            'Quiz',
            { deckId: title }
        )
    }

    render () {
        const { deckId, deck } = this.props

        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{deck.questions.length} cards</Text>
                <TouchableOpacity
                    onPress={() => this.toAddCard(deckId)}
                >
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.toStartQuiz(deckId)}
                >
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapDispatchToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId,
        deck: decks[deckId],
    }
}

export default connect(mapDispatchToProps)(Deck)