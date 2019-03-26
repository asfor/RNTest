import React from 'react'
import {TouchableWithoutFeedback, Text} from 'react-native'

export default class Item extends React.PureComponent {
  state = {layout: {}}

  render() {
    const {title, active} = this.props

    return (
      <TouchableWithoutFeedback onLayout={this.onLayout} onPress={this.onPress}>
        <Text style={{
          fontSize: 13,
          fontWeight: active ? 'bold' : undefined
        }}>{title}</Text>
      </TouchableWithoutFeedback>
    )
  }

  onLayout = e => {
    const {onCreated} = this.props
    const {layout} = e.nativeEvent

    this.setState({layout})
    onCreated && onCreated(layout)
  }

  onPress = () => {
    const {id, onPress, index} = this.props

    onPress(id, this.state.layout, index)
  }
}