import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    handleQuestionTextChange = (input) => {
        this.setState({
            question: input,
        })
    }

    handleAnswerTextChange = (input) => {
        this.setState({
            answer: input,
        })
    }

    handleSubmit = () => {
        // This block should code
    }

    render () {
        const { deckId } = this.props
        const { question, answer } = this.state

        return (
            <View>
                <TextInput 
                    style={styles.input}
                    value={question}
                    onChangeText={this.handleQuestionTextChange}
                />
                <TextInput 
                    style={styles.input}
                    value={answer}
                    onChangeText={this.handleAnswerTextChange}
                />
                <TouchableOpacity
                    onPress={this.handleSubmit}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 50,
    },
})

function mapStateToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId
    }
}

export default connect(mapStateToProps)(AddCard)