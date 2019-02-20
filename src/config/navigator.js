import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Home from '../screens/Home'
import About from '../screens/About'
import ContactUs from '../screens/ContactUs'
import Counter from '../screens/Counter'

const AboutNavigator = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: () => {
      return {
        title: "About",
      }
    },
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: () => {
      return {
        title: "ContactUs",
      }
    },
  }
})

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => {
      return {
        title: "Halaman Home",
      }
    },
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: () => {
      return {
        title: "Profile",
      }
    },
  },
  Counter: {
    screen: Counter,
    navigationOptions: () => {
      return {
        title: "Counter",
      }
    },
  }
}, {
  swipeEnabled: true,
})

export default AppNavigator