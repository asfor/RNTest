import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default props => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  }}>
    <Text style={{
      paddingRight: 3,
      alignItems: 'center'
    }}>厦门</Text>
    <Icon name="chevron-down" />
  </View>
)