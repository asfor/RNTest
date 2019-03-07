import React from 'react'
import {View} from 'react-native'

import Area from './Area'
import SearchBar from './SearchBar'

export default props => (
  <View style={{
    height: 25,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'stretch'
  }}>
    <Area/>
    <SearchBar/>
  </View>
)