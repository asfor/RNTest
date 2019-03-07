import React from 'react'
import {View} from 'react-native'

import Block from '../Block'
import Store from './Store'

const stores = [{
  title: '很优惠',
  store: 'A商店',
  category: '休闲娱乐',
  titleBgColor: '#3b7cd4',
  backgroundColor: '#d3e3f9',
  img: require('../../../static/A.jpg')
}, {
  title: '有格调',
  store: 'B商店',
  category: '休闲娱乐',
  titleBgColor: '#e6942e',
  backgroundColor: '#f9edd3',
  img: require('../../../static/B.jpg')
}, {
  title: '外卖不将就',
  store: 'C商店',
  category: '外卖',
  titleBgColor: '#a99852',
  backgroundColor: '#e6e3d9',
  img: require('../../../static/C.jpg')
}, {
  title: '周末去哪儿',
  store: 'D商店',
  category: '城市观光',
  titleBgColor: '#e62ea9',
  backgroundColor: '#f5e3ee',
  img: require('../../../static/D.jpg')
}]

export default props => (
  <Block whiteSpace style={{marginTop: 10, paddingBottom: 10}}>
    {arrayCut(stores, 2).map((pair, i) => (
      <View key={i} style={{
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5,
        overflow: 'hidden'
      }}>
        {pair.map(info => <Store key={info.title} {...info} />)}
      </View>
    ))}
  </Block>
)

function arrayCut(arr, len) {
  return arr.reduce((result, data) => {
    const lastEle = result[result.length - 1]

    lastEle.length < len
      ? lastEle.push(data)
      : result.push([data])

    return result
  }, [[]])
}