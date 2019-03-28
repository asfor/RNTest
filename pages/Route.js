import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Login from './Login/Login'
import Home from './Home/Home'
import Find from './Find/Find'
import Order from './Order/Order'
import Person from './Person/Person'

const Main = createBottomTabNavigator({
  Home: createStackNavigator({Home}),
  Find: createStackNavigator({Find}),
  Order: createStackNavigator({Order}),
  Person: createStackNavigator({Person})
})

Main.navigationOptions = {header: null}

const RootNavigator = createStackNavigator(
  {Login, Main},
  {initialRouteName: 'Main'}
)

export default createAppContainer(RootNavigator)