import React from 'react'

import Block from '../Block'
import App from './App'

export default props => (
  <Block style={{
    paddingTop: 20,
    paddingBottom: 15,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }}>
    <App name="clock" title="时间" backgroundColor="#f5222d" />
    <App name="cloud" title="天气" backgroundColor="#fadb14" />
    <App name="gift" title="礼物" backgroundColor="#52c41a" />
    <App name="tv" title="电视" backgroundColor="#1890ff" />
    <App name="truck" title="物流" backgroundColor="#722ed1" />
  </Block>
)