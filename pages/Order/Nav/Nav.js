import React from 'react'
import {View} from 'react-native'

import Item from './Item'
import Slider from './Slider'

import emitter from '../emitter'
import {status} from '../dict'

const category = {
  0: '全部',
  ...status
}

export default class Nav extends React.PureComponent {
  state = {
    active: 0,
    initLayout: undefined
  }

  render() {
    const {active, initLayout} = this.state

    return (
      <View style={{marginTop: 15}}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}>
          {Object.keys(category).map((id, i) => (
            <Item
              id={+id}
              key={id}
              index={i}
              title={category[id]}
              active={active === i}
              onCreated={i === 0 ? this.initSlider : undefined}
              onPress={this.onPress}
            />
          ))}
        </View>

        {initLayout ? <Slider ref={dom => this.slider = dom} initLayout={initLayout} /> : undefined}
      </View>
    )
  }

  initSlider = initLayout => this.setState({initLayout})

  onPress = (id, layout, i) => {
    this.setState({active: i})
    this.slider.onSlide(layout)

    emitter.emit('toggleTab', id)
  }
}