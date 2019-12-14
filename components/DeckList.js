import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import { lightPurp, gray } from '../utils/colors'
import { 
    View, 
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native'

class DeckList extends Component {
    state = {
        ready: true,
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
            .then(() => this.setState({ ready: true }))
    }

    renderItem = ({ item }) => {
        const { title, questions } = item

        return (
            <TouchableOpacity
                key={title}
                onPress={() => this.handlePress(title)}
                style={styles.deck}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.cardCount}>{questions.length} cards</Text>
            </TouchableOpacity>
        )
    }

    handlePress = (title) => {
        this.props.navigation.navigate(
            'Deck',
            { deckId: title}
        )
    }

    render () {
        const { decks } = this.props

        return (
            <View style={styles.container}>
                {decks !== null &&
                    <FlatList 
                        data ={ Object.values(decks) }
                        renderItem = { this.renderItem }
                        keyExtractor={(item, index) => index.toString()}
                    />
                }
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
    deck: {
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: Platform.OS === 'ios' ? 35 : 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 35,
        marginBottom: 7,
    },
    cardCount: {
        fontSize: 17,
        color: gray,
    },
})

function mapStateToProps (decks) {
    return {
        decks: decks 
            ? decks
            : null
    }
}

export default connect(mapStateToProps)(DeckList)