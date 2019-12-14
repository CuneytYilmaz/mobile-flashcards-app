import DeckList from './DeckList'
import AddDesk from './AddDesk'
import AddCard from './AddCard'
import Deck from './Deck'
import Quiz from './Quiz'
import { purple, white } from '../utils/colors'
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

const Stack = createAppContainer(createStackNavigator({
    DeckList: {
      screen: TabNav,
      navigationOptions: {
        header: null,
      },
    },
    Deck: {
      screen: Deck,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      },
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        }
      },
    },
}))

export default createAppContainer(Stack);