import React from 'react'
import {FlatList} from 'react-native'

import Card from './Card'

export default props => (
  <FlatList
    style={{
      flex: 1,
      paddingLeft: 5,
      paddingRight: 5,
    }}
    data={props.data}
    renderItem={renderItem}
    keyExtractor={(_, i) => `${i}`}
  />
)

function renderItem({item}) {
  return <Card {...item} />
}