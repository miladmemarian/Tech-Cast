import React from 'react'
import { KeyboardAvoidingView, View, Button, TextInput } from 'react-native'

export default class CreateAccount extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView enabled>
        <View>
          <TextInput placeholder={'username'} />
          <TextInput placeholder={'password'} />
          <Button title="Create Account" />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
