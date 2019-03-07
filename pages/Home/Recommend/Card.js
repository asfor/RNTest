import React from 'react'
import {string, number, arrayOf} from 'prop-types'
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native'

import Tag from './Tag'

const tagColors = ['#dd3939', '#dd7639', '#ddc939']

export default class Card extends React.PureComponent {
  static propTypes = {
    index: number,
    img: number,
    title: string,
    info: string,
    price: number,
    distance: number,
    sold: string,
    tags: arrayOf(string)
  }

  render() {
    const {index, img, title, info, price, distance, sold, tags} = this.props

    return (
      <View style={{
        padding: 15,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
      }}>
        <Image source={img} style={{ width: 100, height: 100 }} />

        <View style={{flex: 1, marginLeft: 8, marginTop: 2}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              numberOfLines={1}
              style={{
                flex: 1,
                fontSize: 22,
                fontWeight: 'bold'
              }}
            >{title}</Text>

            <Text style={{
              width: 50,
              textAlign: 'right',
              fontSize: 14,
              color: '#999'
            }}>{distance}km</Text>
          </View>

          <Text
            numberOfLines={1}
            style={{color: '#aaa', marginTop: 8}}
          >{info}</Text>

          <View style={{flexDirection: 'row', alignItems: 'flex-end', marginTop: 2}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={{color: '#dd8539', width: 10}}>¥</Text>
              <Text style={{color: '#dd8539', flex: 1, fontSize: 26, fontWeight: 'bold'}}>{price}</Text>
            </View>

            <Text style={{flex: 1, color: '#999', textAlign: 'right'}}>已售{sold}</Text>

            <TouchableWithoutFeedback onPress={() => this.onDelete(index)}>
              <View>
                <Tag
                  color="#999999"
                  text="X"
                  style={{
                    marginLeft: 5,
                    borderRadius: 6,
                    fontSize: 10
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={{flexDirection: 'row', marginTop: 6}}>
            {tags.map((text, i) => <Tag key={i} color={tagColors[i]} text={text} />)}
          </View>
        </View>
      </View>
    )
  }

  onDelete = index => {
    console.log(index)
  }
}