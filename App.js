import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import AppNavigator from './components/AppNavigator'
import Constants from 'expo-constants'
import { purple } from './utils/colors'
import { setLocalNotification } from './utils/notifications'
import { 
  StyleSheet, 
  View,
  StatusBar,
  Platform
} from 'react-native'

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Platform.OS === 'ios' ? Constants.statusBarHeight + 30 : Constants.statusBarHeight } }>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={ createStore(reducer, middleware) }>
          <View style={styles.container}>
          <AppStatusBar backgroundColor={purple} barStyle='light-content' />
            <AppNavigator />
          </View>
      </Provider> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
