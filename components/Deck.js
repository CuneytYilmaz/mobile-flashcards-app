import React, { Component } from 'react'
import { handleDeleteDeck } from '../actions'
import { connect } from 'react-redux'
import { lightPurp, gray, white, black, red } from '../utils/colors'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native'

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckId } = navigation.state.params

        return {
            title: deckId,
        }
    }

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
    
    deleteDeck = (deckId) => {
        const { dispatch, navigation } = this.props

        dispatch(handleDeleteDeck(deckId))
        this.setState({
            question: '',
            answer: '',
        })

        navigation.navigate('DeckList')
    }

    render () {
        const { deckId, deck } = this.props
        
        // This block added for skip exception on Rerender after Delete Deck
        if(deck === undefined || deck === null){
            return(
              <View style={styles.container}>
              </View>
            )
          }

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.cardCount}>{deck.questions.length} cards</Text>
                </View>
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={() => this.toAddCard(deckId)}
                        style={ Platform.OS === 'ios' ? [styles.iosBtn, styles.btnAddBackground] : [styles.androidBtn, styles.btnAddBackground] }
                    >
                        <Text style={[styles.btnText, { color: black }]}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.toStartQuiz(deckId)}
                        style={ Platform.OS === 'ios' ? [styles.iosBtn, styles.btnStartBackground] : [styles.androidBtn, styles.btnStartBackground] }
                    >
                        <Text style={[styles.btnText, { color: white }]}>Start Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.deleteDeck(deckId)}
                    >
                        <Text style={styles.textButton}>
                            Delete Deck
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightPurp,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        marginBottom: 7,
    },
    cardCount: {
        fontSize: Platform.OS === 'ios' ? 20 : 17,
        color: gray,
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerContainer: {
        flex: 1, 
        justifyContent:'center',
        alignItems: 'center',
    },
    iosBtn: {
        padding: 10,
        borderRadius: 7,
        height: 65,
        width: 300,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        justifyContent: 'center',
    },
    androidBtn: {
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 60,
        width: 300,
        borderRadius: 2,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    btnAddBackground: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: black,
    },
    btnStartBackground: {
        backgroundColor: black,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 15,
    },
    textButton: {
        color: red,
        marginBottom: Platform.OS === 'ios' ? 80 : 60,
        fontSize: 20,
    }
})

function mapDispatchToProps (decks, { navigation }) {
    const { deckId } = navigation.state.params

    return {
        deckId,
        deck: decks 
            ? decks[deckId]
            : null,
    }
}

export default connect(mapDispatchToProps)(Deck)