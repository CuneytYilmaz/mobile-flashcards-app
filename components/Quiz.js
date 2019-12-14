import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

class Quiz extends Component {
    state = {
        counter: 0,
        correct: 0,
        incorrect: 0,
        showAnswer: false,
    }

    toggleCard = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }))
    }

    render () {
        const { deck } = this.props
        const { counter, correct, incorrect, showAnswer } = this.state
        const questionCount = deck.questions.length
        console.log('showAnswer',showAnswer)

        if (questionCount === 0) {
            return (
                <View>
                    <Text>There is no question</Text>
                </View>
            )
        }

        if (questionCount === counter) {
            return (
                <View>
                    <Text>Result</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>{counter} / {questionCount}</Text>
                <Text>{showAnswer === true 
                        ? deck.questions[counter].question
                        : deck.questions[counter].answer }</Text>
                <TouchableOpacity
                    onPress={this.toggleCard}
                >
                    <Text>
                        {showAnswer === true ? 'Question' : 'Answer'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId,
        deck: decks[deckId],
    }
}

export default connect(mapStateToProps)(Quiz)