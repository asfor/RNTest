import React from 'react'
import {View} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default props => (
  <View style={{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  }}>
    <Icon name="search" color="#999" />
  </View>
)
