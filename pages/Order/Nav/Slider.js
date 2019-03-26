import React from 'react'
import {Animated} from 'react-native'

export default class Slider extends React.PureComponent {
  constructor(props) {
    super(props)

    const {x, width} = props.initLayout
    this.state = {
      x: new Animated.Value(x),
      width: new Animated.Value(width)
    }
  }

  render() {
    const {x, width} = this.state

    return (
      <Animated.View style={{
        height: 3,
        width,
        marginLeft: x,
        marginTop: 13,
        borderRadius: 5,
        backgroundColor: '#4ead78'
      }} />
    )
  }

  onSlide = ({x, width}) => {
    Animated.parallel([
      Animated.timing(this.state.x, {toValue: x, duration: 200}),
      Animated.timing(this.state.width, {toValue: width, duration: 200})
    ]).start()
  }
}