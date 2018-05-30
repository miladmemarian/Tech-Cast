import React from 'react'
import {
  KeyboardAvoidingView,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class CreateAccount extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView enabled>
        <View>
          <TextInput style={style.username} placeholder={'Username'} />
          <TextInput style={style.password} placeholder={'Password'} />
          <TextInput
            style={style.repeatPassword}
            placeholder={'Repeat password'}
          />
          <Button
            style={style.create}
            onPress={this.props.renderList}
            title="Create Account"
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const style = StyleSheet.create({
  username: {
    borderWidth: 1,
    borderColor: 'rgb(169,169,169)',
    marginTop: 280,
    marginLeft: 85,
    width: 200,
    height: 40
  },
  password: {
    borderWidth: 1,
    borderColor: 'rgb(169,169,169)',
    marginTop: 20,
    marginLeft: 85,
    width: 200,
    height: 40
  },
  repeatPassword: {
    borderWidth: 1,
    borderColor: 'rgb(169,169,169)',
    marginTop: 20,
    marginLeft: 85,
    marginBottom: 40,
    width: 200,
    height: 40
  },
  create: {
    height: 40,
    marginTop: 100
  }
})
