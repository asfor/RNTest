import React from 'react'
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import Block from '../Block'
import Card from './Card'
import {context} from '../Context'

const Recommend = props => {
  const {recommendData, recommendLoading} = props.dataSource

  return (
    <Block>
      <View style={{
        padding: 12,
        alignItems: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
      }}>
        <Text style={{color: '#999'}}>— 猜你喜欢 —</Text>
      </View>

      <View>
        {(recommendData || []).map((data, i) => <Card key={i} index={i} {...data} />)}
      </View>

      {recommendLoading ? (
        <View style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{color: '#999', marginRight: 4}}>载入中</Text>
          <Icon name="loader" />
        </View>
      ) : undefined}
    </Block>
  )
}

export default context(Recommend)