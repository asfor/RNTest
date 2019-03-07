import React from 'react'
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native'

export default class Login extends React.PureComponent {
  static navigationOptions = {header: null}

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <View style={style.warp}>
        <Text style={style.title}>XX的平台</Text>

        <View style={style.inputGroup}>
          <TextInput
            style={{
              ...style.input,
              borderBottomColor: '#eee',
              borderBottomWidth: 1
            }}
            placeholder="用户名"
            onChangeText={this.onChangeUsername}
          />

          <TextInput
            style={style.input}
            placeholder="密码"
            secureTextEntry={true}
            onChangeText={this.onChangePassword}
          />
        </View>

        <TouchableHighlight
          style={style.loginBtn}
          onPress={this.onLogin}
          underlayColor="#40A9FF"
        >
          <Text style={style.loginText}>登录</Text>
        </TouchableHighlight>
      </View>
    )
  }

  onChangeUsername = username => this.setState({username})
  onChangePassword = password => this.setState({password})

  onLogin = () => {
    console.log(this.state)
  }
}

const style = StyleSheet.create({
  warp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: '#F5FCFF'
  },

  title: {
    textAlign: 'center',
    fontSize: 24
  },

  inputGroup: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 7,
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderWidth: 1
  },

  input: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },

  loginBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1890FF',
    borderRadius: 7
  },

  loginText: {
    color: '#FFF',
    textAlign: 'center'
  }
})