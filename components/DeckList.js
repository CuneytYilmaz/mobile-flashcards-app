import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import { 
    View, Text 
} from 'react-native'

class DeckList extends Component {
    state = {
        ready: false,
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
            .then(() => this.setState({ ready: true }))
    }

    render () {
        const { decks } = this.props

        return (
            <View style={{ flex: 1 }}>
                {decks !== null &&
                Object.values(decks).map((item)=><Text>{item.title}</Text>)}
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