import React from 'react'
import { TextInput } from 'react-native'

export default class SearchBar extends React.Component {
  render() {
    return <TextInput placeholder={'search'} style={{ flex: 1 }} />
  }
}
