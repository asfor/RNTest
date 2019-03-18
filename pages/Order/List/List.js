import React from 'react'
import {ScrollView} from 'react-native'

import Item from './Item'

const data = [{
  type: 0,
  title: '魔幻的的城',
  status: 1,
  img: require('../../../static/4.jpg'),
  info: ['1间, 阁楼套房', '2022-09-29 - 2022-09-30', '总价：￥204.00']
}, {
  type: 2,
  title: '西湖海底美景',
  status: 2,
  img: require('../../../static/2.jpg'),
  info: ['影院：海底影院', '场次：2021-09-10 20:30', '数量：1', '总价：￥49.00']
}]

export default class List extends React.PureComponent {
  state = {dataSource: []}

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <ScrollView style={{
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#eee'
      }}>
        {this.state.dataSource.map((data, i) => <Item key={i} {...data} />)}
      </ScrollView>
    )
  }

  getData = () => {
    const dataSource = data
    setTimeout(() => this.setState({dataSource}), Math.random() * 500)
  }
}