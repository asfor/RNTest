import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Login from './Login/Login'
import Home from './Home/Home'
import Find from './Find/Find'

const Main = createBottomTabNavigator({
  Find: createStackNavigator({Find}),
  Home: createStackNavigator({Home}),
})

Main.navigationOptions = {header: null}

const RootNavigator = createStackNavigator(
  {Login, Main},
  {initialRouteName: 'Main'}
)

export default createAppContainer(RootNavigator)
