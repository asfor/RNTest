import React from 'react'
import {View} from 'react-native'

import Nav from './Nav/Nav'
import List from './List/List'

export default class Order extends React.PureComponent{
  static navigationOptions = {
    title: '我的订单',
    headerStyle: {
      borderBottomWidth: 0
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Nav />
        <List />
      </View>
    )
  }
}