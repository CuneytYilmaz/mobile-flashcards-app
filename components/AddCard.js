import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions'
import { lightPurp, white, black } from '../utils/colors'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
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
        const { question, answer } = this.state
        const { deckId, dispatch } = this.props
        const card = { question, answer }

        dispatch(handleAddCardToDeck(deckId, card))
            .then(() => this.setState({
                question: '',
                answer: '',
            }))

        this.props.navigation.navigate(
            'Deck',
            { deckId: deckId}
        )
    }

    render () {
        const { question, answer } = this.state

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        value={question}
                        onChangeText={this.handleQuestionTextChange}
                        placeholder='Question'
                    />
                    <TextInput 
                        style={styles.input}
                        value={answer}
                        onChangeText={this.handleAnswerTextChange}
                        placeholder='Answer'
                    />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
                    >
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightPurp,
    },
    input: {
        width: 300,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        margin: 10,
        borderRadius: 4,
        backgroundColor: white,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 70,
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iosBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 65,
        width: 300,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 120,
        justifyContent: 'center',
    },
    androidBtn: {
        backgroundColor: black,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 60,
        borderRadius: 2,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 90,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
        color: white,
    },
})

function mapStateToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId
    }
}

export default connect(mapStateToProps)(AddCard)