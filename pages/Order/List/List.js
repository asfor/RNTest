import React from 'react'
import {ScrollView} from 'react-native'

import Item from './Item'

import emitter from '../emitter'

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
}, {
  type: 3,
  title: '灌汤煎包',
  status: 3,
  img: require('../../../static/3.jpg'),
  info: ['下单时间：2021-09-11 12:30', '总价：￥5.40']
}, {
  type: 3,
  title: '狗皮膏药',
  status: 4,
  img: require('../../../static/1.jpg'),
  info: ['下单时间：2020-09-10 17:43', '数量：2', '总价：￥36.00']
}, {
  type: 0,
  title: '好玩的主题酒店',
  status: 5,
  img: require('../../../static/08.jpg'),
  info: ['1间, 豪华单人间', '2020-04-14 - 2020-04-16', '总价：￥514.00']
}, {
  type: 2,
  title: '什么鬼电影',
  status: 5,
  img: require('../../../static/07.jpg'),
  info: ['影院：不知道在哪的影院', '场次：2020-02-25 22:10', '数量：1', '总价：￥46.50']
}].map((data, i) => ({...data, id: i}))

export default class List extends React.PureComponent {
  state = {
    dataSource: [],
    displayDataSource: [],
    displayType: undefined
  }

  componentDidMount() {
    this.getData()
    emitter.on('toggleTab', this.filterData)
  }

  render() {
    return (
      <ScrollView style={{
        flex: 1,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: '#eee'
      }}>
        {this.state.displayDataSource.map(data => (
          <Item
            {...data}
            key={data.id}
            onDel={this.delData}
          />
        ))}
      </ScrollView>
    )
  }

  getData = () => {
    const dataSource = data

    setTimeout(() => this.setState({dataSource}, this.filterData), Math.random() * 500)
  }

  delData = id => {
    const dataSource = [...this.state.dataSource]
    const index = dataSource.findIndex(data => data.id === id)

    dataSource.splice(index, 1)
    this.setState({dataSource}, this.filterData)
  }

  filterData = (displayType = this.state.displayType) => {
    const {dataSource} = this.state
    const displayDataSource = !displayType
      ? dataSource
      : dataSource.filter(data => data.status === displayType)

    this.setState({displayType, displayDataSource})
  }
}