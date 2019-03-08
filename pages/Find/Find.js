import React from 'react'
import {View, FlatList, Image, Text, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const avatar = require('../../static/user.jpg')
const data = [{
  img: require('../../static/01.jpg'),
  title: '我要疯狂安利给身边的小伙伴们哈哈哈哈哈哈哈哈',
  user: '卡希',
  avatar,
  up: 0
}]

const cardWidth = Dimensions.get('window').width / 2

export default class Find extends React.PureComponent {
  static navigationOptions = {title: '发现'}
  
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee'
      }}>
        <FlatList
          style={{flex: 1}}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(_, i) => `${i}`}
        />

        <FlatList style={{flex: 1}} />
      </View>
    )
  }

  renderItem = ({item}) => {
    const {img, title, user, avatar, up} = item
    const {width, height} = Image.resolveAssetSource(img)
    const imgheight = cardWidth * height / width

    return (
      <View style={{backgroundColor: '#fff'}}>
        <Image source={img} style={{width: '100%', height: imgheight}} />
  
        <Text numberOfLines={2}>{title}</Text>
  
        <View>
          <Image source={avatar} />
          <Text>{user}</Text>
          <Icon name="thumbs-up" />
          <Text>{up ? up : undefined}</Text>
        </View>
      </View>
    )
  }
}