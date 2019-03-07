import React from 'react'
import {View} from 'react-native'

export default props => {
  const {children, whiteSpace, style} = this.props
  
  return (
    <View style={{
      backgroundColor: '#fff',
      padding: whiteSpace ? 5 : 0,
      marginBottom: 10,
      ...style
    }}>
      {children}
    </View>
  )
}