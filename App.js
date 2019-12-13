import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import AppNavigator from './components/AppNavigator'

export default function App() {
  return (
    <Provider store={ createStore(reducer) }>
        <View style={{flex: 1}}>
          <AppNavigator />
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
