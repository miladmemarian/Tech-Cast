import React from 'react'
import { TextInput } from 'react-native'

export default class SearchBar extends React.Component {
  render() {
    return (
      <TextInput
        onChangeText={this.props.handleTextChange}
        placeholder={'search'}
        style={{ flex: 1 }}
      />
    )
  }
}
