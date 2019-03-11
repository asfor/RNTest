import React from 'react'
import {View, Image, Text, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const cardWidth = Dimensions.get('window').width / 2

export default props => {
  const {img, title, user, avatar, up} = props
  const {width, height} = Image.resolveAssetSource(img)
  const imgHeight = cardWidth * height / width

  return (
    <View style={{
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 7,
      shadowColor: '#d5d5d5',
      shadowOpacity: 1,
      shadowOffset: {height: 0, width: 0},
      shadowRadius: 4
    }}>
      <View style={{
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        overflow: 'hidden'
      }}>
        <Image source={img} style={{width: '100%', height: imgHeight}} />
      </View>

      <Text
        numberOfLines={2}
        style={{
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 14,
          paddingRight: 14,
          fontSize: 15,
          fontWeight: 'bold',
          lineHeight: 20
        }}>{title}</Text>

      <View style={{
        flexDirection: 'row',
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 12,
      }}>
        <View style={{
          flex: 4,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            marginRight: 4,
            borderRadius: 20,
            overflow: 'hidden'
          }}>
            <Image source={avatar} />
          </View>
          <Text numberOfLines={1} style={{flex: 1}}>{user}</Text>
        </View>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          textAlign: 'right',
          alignItems: 'center'
        }}>
          <Icon name="thumbs-up" />
          <Text style={{marginLeft: 4}}>{up ? up : undefined}</Text>
        </View>
      </View>
    </View>
  )
}