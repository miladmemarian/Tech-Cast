import React from 'react'
import { View } from 'react-native'
import Podcasts from './podcasts'
import SearchBar from './searchBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Podcasts />
        <SearchBar />
      </View>
    )
  }
}
