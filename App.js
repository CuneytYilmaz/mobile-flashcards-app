import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
// import AppNavigator from './components/AppNavigator'

import DeckList from './components/DeckList'
import AddDesk from './components/AddDesk'
import { purple, white } from './utils/colors'
import { Platform } from 'react-native'
import { 
    createAppContainer, 
    createStackNavigator, 
    createBottomTabNavigator, 
    createMaterialTopTabNavigator 
} from 'react-navigation'

const Tabs = {
  Decks: {
      screen: DeckList,
      navigationOptions: {
          tabBarLabel: 'Decks',
          // tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
  },
  AddDesk: {
      screen: AddDesk,
      navigationOptions: {
          tabBarLabel: 'Add Desk',
          // tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
      },
  },
}

const navigationOptions = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const TabNav = createAppContainer(Platform.OS === 'ios' ? createBottomTabNavigator(Tabs, navigationOptions) : createMaterialTopTabNavigator(Tabs, navigationOptions))

const Stack = createStackNavigator({
  DeckList: {
    screen: TabNav,
    navigationOptions: {
      header: null,
    }
  },
  AddDesk: {
    screen: AddDesk,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
})

const MainNavigator = createAppContainer(Stack)

export default function App() {
  return (
    <Provider store={ createStore(reducer) }>
        <View style={{flex: 1}}>
          <MainNavigator />
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
