import React from 'react'
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native'
import {number, string, arrayOf} from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'

import {types, status} from '../dict'

export default class Item extends React.PureComponent {
  static propTypes = {
    type: number,
    title: string,
    status: number,
    img: number,
    info: arrayOf(string)
  }

  render() {
    const {type, title, status: _status, img, info} = this.props

    return (
      <View>
        {/* <TouchableWithoutFeedback>
          <View>
            <Text>删除</Text>
          </View>
        </TouchableWithoutFeedback> */}

        <View style={{
          flex: 1,
          marginTop: 2,
          marginBottom: 2,
          marginLeft: 13,
          marginRight: 13,
          padding: 10,
          borderRadius: 8,
          backgroundColor: '#fff'
        }}>
          <View style={{
            borderColor: '#eee',
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 10
          }}>
            <View style={{
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: types[type].color
            }}>
              <Icon style={{fontSize: 10, color: '#fff'}} name={types[type].icon} />
            </View>

            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                marginLeft: 5,
                marginRight: 5,
                fontSize: 15,
                color: '#222',
                fontWeight: 'bold'
              }}
            >{title}</Text>

            <Text style={{
              color: '#666',
              fontSize: 13,
              fontWeight: 'bold'
            }}>{status[_status]}</Text>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={img} style={{
              width: 50,
              height: 50,
              marginRight: 10,
              borderRadius: 4
            }} />

            <View>
              {info.map((text, i) => (
                <Text key={i} style={{
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#666',
                }}>{text}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    )
  }
}