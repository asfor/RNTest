import React from 'react'
import {string, number} from 'prop-types'
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native'

export default class Store extends React.PureComponent {
  static propTypes = {
    title: string,
    store: string,
    category: string,
    titleBgColor: string,
    backgroundColor: string,
    img: number
  }

  render() {
    const {title, store, category, titleBgColor, backgroundColor, img} = this.props

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{
          flex: 1,
          height: 120,
          marginRight: 5,
          alignItems: 'flex-start',
          backgroundColor
        }}>
          <View style={{
            padding: 5,
            borderBottomRightRadius: 10,
            backgroundColor: titleBgColor
          }}>
            <Text style={{color: '#fff', fontSize: 12}}>{title}</Text>
          </View>

          <Text style={{
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 5,
            paddingBottom: 3,
            fontSize: 16,
            fontWeight: 'bold'
          }}>{store}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={{
              flex: 1,
              fontSize: 12,
              paddingLeft: 8,
              color: '#666'
            }}>{category}</Text>

            <View style={{
              flex: 1,
              height: 80,
              overflow: 'hidden',
              borderTopLeftRadius: 90,
              borderTopRightRadius: 80,
              borderBottomLeftRadius: 50
            }}>
              <Image source={img} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onPress = () => {
    console.log(this.props.store)
  }
}