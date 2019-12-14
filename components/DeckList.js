import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import { 
    View, 
    Text,
    FlatList,
    TouchableOpacity
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
            >
                <Text>{title}</Text>
                <Text>{questions.length} cards</Text>
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
        console.log('render DeckList;',decks)

        return (
            <View style={{ flex: 1 }}>
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

function mapStateToProps (decks) {
    return {
        decks: decks 
            ? decks
            : null
    }
}

export default connect(mapStateToProps)(DeckList)