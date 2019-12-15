import React, { Component } from 'react'
import { purple, lightPurp, white, black } from '../utils/colors'
import { handleSaveDeckTitle } from '../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native'

class AddDesk extends Component {
    state = {
        input: '',
    }

    handleTextChange = (input) => {
        this.setState({
            input
        })
    }

    handleSubmit = () => {
        const { input } = this.state
        const { dispatch } = this.props

        dispatch(handleSaveDeckTitle(input))
            .then(() => this.setState({ input: '' }))

        this.props.navigation.navigate(
            'Deck',
            { deckId: input }
        )
    }

    render () {
        const { input } = this.state

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    value={input}
                    style={styles.input}
                    onChangeText={this.handleTextChange}
                    placeholder='DeckTitle'
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn }
                        onPress={this.handleSubmit}
                        disabled={input === ''}
                    >
                        <Text style={styles.btnText}>Create Deck</Text>
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
    title: {
        fontSize: Platform.OS === 'ios' ? 40 : 30,
        textAlign: 'center',
        marginTop: 40,
    },
    input: {
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 4,
        margin: 50,
        backgroundColor: white,
        alignItems: 'center'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iosSubmitBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 7,
        height: 65,
        width: 300,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 80,
        justifyContent: 'center',
    },
    androidSubmitBtn: {
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
        color: white,
        textAlign: 'center',
        fontSize: 15,
    }
})

export default connect()(AddDesk)