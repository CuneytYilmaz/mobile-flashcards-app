import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import AppNavigator from './components/AppNavigator'
import Constants from 'expo-constants'
import { purple } from './utils/colors'
import { 
  StyleSheet, 
  View,
  StatusBar
} from 'react-native'

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight } }>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <Provider store={ createStore(reducer) }>
        <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={purple} barStyle='light-content' />
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
