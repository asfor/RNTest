import React from 'react'
import {View, Image, Text, TouchableWithoutFeedback, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const cardWidth = Dimensions.get('window').width / 2

export default class Card extends React.PureComponent {
  state = {hasUp: false}

  render() {
    const {img, title, user, avatar, up} = this.props
    const {hasUp} = this.state
    const allUp = (up + (hasUp ? 1 : 0))

    const {width, height} = Image.resolveAssetSource(img)
    const imgHeight = cardWidth * height / width

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
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
              flexDirection: 'row-reverse',
              alignItems: 'center'
            }}>
              <Text style={{marginLeft: 4}}>
                {allUp ? allUp : undefined}
              </Text>

              <TouchableWithoutFeedback onPress={this.onUp}>
                <Text style={{color: hasUp ? '#59b97b' : undefined}}>
                  <Icon name="thumbs-up" />
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onPress = () => console.log(this.props)
  onUp = () => this.setState({hasUp: !this.state.hasUp})
}