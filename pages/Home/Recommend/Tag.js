import React from 'react'
import {View, Text} from 'react-native'

export default props => {
  const {text, color, style} = props

  return (
    <View style={{
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 3,
      paddingRight: 3,
      marginRight: 5,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: color + '66',
      ...style
    }}>
      <Text style={{color, fontSize: (style || {}).fontSize || 10}}>{text}</Text>
    </View>
  )
}