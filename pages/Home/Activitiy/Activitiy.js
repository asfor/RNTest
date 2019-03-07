import React from 'react'
import {Image} from 'react-native'

import Block from '../Block'

const img = require('../../../static/redPackets.jpg')

export default props => (
  <Block style={{height: 90}}>
    <Image source={img} style={{width: '100%'}} />
  </Block>
)