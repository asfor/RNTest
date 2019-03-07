import {createStackNavigator, createAppContainer} from 'react-navigation'
import Login from './Login/Login'
import Home from './Home/Home'

const RootNavigator = createStackNavigator(
  {Login, Home},
  {initialRouteName: 'Home'}
)

export default createAppContainer(RootNavigator)
