import React, { Component } from 'react'
import { purple } from '../utils/colors'
import { handleSaveDeckTitle, getDecks } from '../actions'
import { connect } from 'react-redux'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native'

class AddDesk extends Component {
    state = {
        input: 'test',
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
        this.setState({
            input: ''
        })

        // Navigate to Deck
    }

    render () {
        const { input } = this.state

        return (
            <View>
                <Text>What is the title of your new deck?</Text>
                <TextInput
                    value={input}
                    style={styles.input}
                    onChangeText={this.handleTextChange}
                />

                <TouchableOpacity
                    style={ Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn }
                    onPress={this.handleSubmit}
                >
                    <Text>Create Deck</Text>
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
    iosSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
    },
    androidSubmitBtn: {
        backgroundColor: purple,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default connect()(AddDesk)