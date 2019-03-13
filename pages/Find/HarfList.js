import React from 'react'
import {FlatList} from 'react-native'

import Card from './Card'

export default props => (
  <FlatList
    data={props.data}
    renderItem={renderItem}
    keyExtractor={(_, i) => `${i}`}
    style={{
      flex: 1,
      paddingLeft: 5,
      paddingRight: 5,
    }}
  />
)

const renderItem = ({item}) => <Card {...item} />