import React from 'react'
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native'

const avatar = require('../../static/avatar.jpg')

export default props => (
  <View style={style.warp}>
    <View style={style.shade} />

    <View style={style.img}>
      <Image source={avatar} style={{width: 60, height: 60}}/>
    </View>

    <Text style={style.username}>Rx78-2</Text>
  </View>
)

const style = StyleSheet.create({
  warp: {
    height: 80,
    alignItems: 'center',
    backgroundColor: '#25879a'
  },

  shade: {
    position: 'absolute',
    height: 60,
    width: 60,
    bottom: 0,
    backgroundColor: '#fff',
    borderRadius: 30,
    transform: [
      {scaleX: Dimensions.get('window').width / 53},
      {translateY: 40}
    ]
  },

  img: {
    overflow: 'hidden',
    marginBottom: 3,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#fff'
  },

  username: {
    fontWeight: 'bold',
    fontSize: 17
  }
})