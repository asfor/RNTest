import React from 'react'
import {Text} from 'react-native'
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'

import Login from './Login/Login'
import Home from './Home/Home'
import Find from './Find/Find'
import Order from './Order/Order'
import Person from './Person/Person'

const tabInfo = {
  Home: {icon: 'home', name: '首页'},
  Find: {icon: 'compass', name: '发现'},
  Order: {icon: 'clipboard', name: '订单'},
  Person: {icon: 'user', name: '我的'}
}

const Main = createBottomTabNavigator({
  Home: createStackNavigator({Home}),
  Find: createStackNavigator({Find}),
  Order: createStackNavigator({Order}),
  Person: createStackNavigator({Person})
}, {
  defaultNavigationOptions: ({navigation}) => {
    const {icon, name} = tabInfo[navigation.state.routeName]

    return {
      tabBarLabel: ({ tintColor }) => <Text style={{color: tintColor, fontSize: 11}}>{name}</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={icon}
          size={23}
          color={tintColor}
        />
      ),
      tabBarOptions: {
        activeTintColor: '#4eadad',
        inactiveTintColor: 'gray'
      }
    }
  }
})

Main.navigationOptions = {header: null}

const RootNavigator = createStackNavigator(
  {Login, Main},
  {initialRouteName: 'Main'}
)

export default createAppContainer(RootNavigator)