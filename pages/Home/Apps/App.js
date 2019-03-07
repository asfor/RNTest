import React from 'react'
import {string} from 'prop-types'
import {View, Text, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

export default class Home extends React.PureComponent {
  static propTypes = {
    name: string,
    title: string,
    backgroundColor: string,
  }

  render() {
    const {name, title, backgroundColor} = this.props

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor
          }}>
            <Icon name={name} style={{
              fontSize: 24,
              color: '#fff'
            }} />
          </View>

          <View style={{
            alignItems: 'center',
            marginTop: 3
          }}>
            <Text>{title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onPress = () => {
    console.log(this.props.name)
  }
}