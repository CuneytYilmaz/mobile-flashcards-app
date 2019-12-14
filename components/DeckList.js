import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
    View, Text 
} from 'react-native'

class DeckList extends Component {
    componentDidMount() {
        
    }

    render () {
        return (
            <View>
                <Text>DeckList</Text>
            </View>
        )
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)