import React from 'react'
import {View, ScrollView} from 'react-native'

import Header from './Header/Header'
import Apps from './Apps/Apps'
import Chosen from './Chosen/Chosen'
import Recommend from './Recommend/Recommend'
import Activitiy from './Activitiy/Activitiy'

import {Provider, initData} from './context'

export default class Home extends React.PureComponent {
  static navigationOptions = {
    headerTitle: <Header/>
  }

  state = {...initData}

  componentDidMount() {this.getData()}

  render() {
    return (
      <View style={{backgroundColor: '#eee', flex: 1}}>
        <Provider value={this.state}>
          <Apps />

          <View style={{flex: 1}}>
            <ScrollView
              onScroll={this.onScroll}
              scrollEventThrottle={5}
              showsVerticalScrollIndicator={false}
            >
              <Chosen />
              <Activitiy />
              <Recommend />
            </ScrollView>
          </View>
        </Provider>
      </View>
    )
  }

  onScroll = e => {
    const {contentOffset: {y: scroll}, contentSize: {height: content}, layoutMeasurement: {height: view}} = e.nativeEvent

    if (scroll + view >= content - 150)
      this.getData()
  }

  getData = () => {
    this.setState({recommendLoading: true})
    setTimeout(() => this.setState({
      recommendData: [...this.state.recommendData, ...dataList],
      recommendLoading: false
    }), 500)
  }
}

const dataList = [{
  img: require('../../static/1.jpg'),
  title: '东山寺',
  info: '门票 等优惠',
  price: 10,
  distance: 4.8,
  sold: '1000+',
  tags: []
}, {
  img: require('../../static/2.jpg'),
  title: '相约网络会',
  info: '[3店通用] 单人网咖A套餐',
  price: 18.9,
  distance: 4.5,
  sold: '4851',
  tags: ['5.8折']
}, {
  img: require('../../static/3.jpg'),
  title: '好喝的咖啡gooddrinkcoffee',
  info: '29分钟送达',
  price: 29,
  distance: 4.0,
  sold: '75',
  tags: ['满39减13，满69减33', '支持自取']
}, {
  img: require('../../static/4.jpg'),
  title: '魔幻的的城',
  info: '门票 等优惠',
  price: 50,
  distance: 11.4,
  sold: '1.4万+',
  tags: ['好评如潮']
}, {
  img: require('../../static/5.jpg'),
  title: '游戏体验馆',
  info: '[海底路]救命工具包（多店通用版）',
  price: 20,
  distance: 11.8,
  sold: '933',
  tags: []
}]