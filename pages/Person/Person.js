import React from 'react'
import {ScrollView, Image} from 'react-native'

import Head from './Head'
import List from './List'

const avatar = require('../../static/avatar.jpg')

const options = [{
  title: '头像',
  info: <Image source={avatar} style={{width: 30, height: 30}} />,
  onPress: () => console.log('头像')
}, {
  title: '昵称',
  info: 'rx78-2',
  onPress: () => console.log('昵称')
}, {
  title: '生日',
  info: '',
  onPress: () => console.log('生日')
}, {
  title: '收货地址',
  info: '修改/添加',
  onPress: () => console.log('收货地址')
}]

export default class Person extends React.PureComponent {
  static navigationOptions = {
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: '#25879a'
    }
  }

  render() {
    return (
      <ScrollView alwaysBounceVertical={false} style={{flex: 1}}>
        <Head />
        <List options={options} />
      </ScrollView>
    )
  }
}