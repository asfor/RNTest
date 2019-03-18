import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Login from './Login/Login'
import Home from './Home/Home'
import Find from './Find/Find'
import Order from './Order/Order'

const Main = createBottomTabNavigator({
  Order: createStackNavigator({Order}),
  Home: createStackNavigator({Home}),
  Find: createStackNavigator({Find}),
})

Main.navigationOptions = {header: null}

const RootNavigator = createStackNavigator(
  {Login, Main},
  {initialRouteName: 'Main'}
)

export default createAppContainer(RootNavigator)
