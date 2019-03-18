import React from 'react'
import {View} from 'react-native'

import Item from './Item'
import Slider from './Slider'

import {status} from '../dict'

const category = ['全部', ...Object.values(status)]

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
          {category.map((title, i) => (
            <Item
              key={i}
              index={i}
              title={title}
              active={active === i}
              onCreated={i === 0 ? this.initSlider : undefined}
              onPress={layout => this.onPress(layout, i)}
            />
          ))}
        </View>

        {initLayout ? <Slider ref={dom => this.slider = dom} initLayout={initLayout} /> : undefined}
      </View>
    )
  }

  initSlider = initLayout => this.setState({initLayout})

  onPress = (layout, i) => {
    this.setState({active: i})
    this.slider.onSlide(layout)
  }
}