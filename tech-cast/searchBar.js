import React from 'react'
import { KeyboardAvoidingView, View, TextInput } from 'react-native'

export default class SearchBar extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior="padding"
        enabled
      >
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgb(169,169,169)',
            flexGrow: 1
          }}
        >
          <TextInput
            onChangeText={this.props.handleTextChange}
            placeholder={'search'}
            style={{ height: 40 }}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
