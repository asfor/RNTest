import React from 'react'
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const Item = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View style={[style.warp, {borderBottomWidth: props.isLast ? 0 : 1}]}>
      <Text numberOfLines={1} style={style.title}>{props.title}</Text>

      <View style={style.right}>
        {typeof props.info === 'string' ? <Text numberOfLines={1} style={style.info}>{props.info}</Text> : props.info}
        <Icon name="chevron-right" style={style.icon} />
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export default props => (
  // 屏幕高度 - Head高度
  <View>
    {props.options.map((option, i) => <Item key={i} isLast={i === props.options.length} {...option} />)}
  </View>
)

const style = StyleSheet.create({
  warp: {
    paddingLeft: 9,
    paddingRight: 9,
    paddingTop: 11,
    paddingBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee'
  },

  title: {fontSize: 13},

  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  info: {fontSize: 12, color: '#999'},
  icon: {marginLeft: 10}
})