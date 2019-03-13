import React from 'react'
import {ScrollView, View} from 'react-native'

import HarfList from './HarfList'

const avatar = require('../../static/user.jpg')
const data = [{
  img: require('../../static/01.jpg'),
  title: '我要疯狂安利给身边的小伙伴们哈哈哈哈哈哈哈哈asdasdasd',
  user: '卡希',
  avatar,
  up: 0
}, {
  img: require('../../static/02.jpg'),
  title: '大厅宽敞，可以休息',
  user: '莉',
  avatar,
  up: 0
}, {
  img: require('../../static/03.jpg'),
  title: '真的太喜欢了！以后有钱还要来[开心]',
  user: 'StarlightYYYU',
  avatar,
  up: 2
}, {
  img: require('../../static/04.jpg'),
  title: '超级下饭，两个人吃了四碗米饭！',
  user: '萨瓦芝士',
  avatar,
  up: 0
}, {
  img: require('../../static/05.jpg'),
  title: '要是被我奶奶知道我话9元买了个地瓜一定会被喷。',
  user: '哈雷小魔仙',
  avatar,
  up: 1
}, {
  img: require('../../static/06.jpg'),
  title: '都是免费的！',
  user: '巧克力嘛',
  avatar,
  up: 50
}, {
  img: require('../../static/07.jpg'),
  title: '排了一个多小时的队，我的妈呀',
  user: '答应我别汪汪',
  avatar,
  up: 0
}, {
  img: require('../../static/08.jpg'),
  title: '看3D别忘了带3D眼睛',
  user: 'cc',
  avatar,
  up: 0
// }, {
//   img: require('../../static/09.jpg'),
//   title: '整体说他家价格便宜',
//   user: '大吃四方',
//   avatar,
//   up: 0
// }, {
//   img: require('../../static/10.jpg'),
//   title: '真的太好喝了啊啊啊啊啊啊！爱上了',
//   user: '清时_Lola',
//   avatar,
//   up: 2
}]

export default class Find extends React.PureComponent {
  static navigationOptions = {
    title: '发现',
    headerStyle: {
      backgroundColor: '#eee',
      borderBottomWidth: 0
    }
  }

  state = {
    data1: [],
    data2: []
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const {data1, data2} = this.state

    return (
      <ScrollView>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#eee'
        }}>
          <HarfList data={data1} />
          <HarfList data={data2} />
        </View>
      </ScrollView>
    )
  }

  getData = () => {
    const _data = [...data].sort((a, b) => Math.random() > .5)
    const len = _data.length
    const data1 = _data.slice(0, len / 2)
    const data2 = _data.slice(len / 2, len)

    this.setState({data1, data2})
  }
}