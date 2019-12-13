import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import DeckList from './components/DeckList'


export default function App() {
  return (
    <Provider store={ createStore(reducer) }>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app</Text>
          <DeckList />
        </View>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
