import React from 'react'
import { KeyboardAvoidingView, View, TextInput, StyleSheet } from 'react-native'

export default class SearchBar extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior="padding"
        enabled
      >
        <View style={style.container}>
          <TextInput
            onChangeText={this.props.handleTextChange}
            placeholder={'search'}
            style={style.input}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgb(169,169,169)',
    flexGrow: 1
  },
  input: {
    height: 40
  }
})
