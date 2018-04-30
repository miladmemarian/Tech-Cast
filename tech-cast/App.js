import React from 'react'
import { View } from 'react-native'
import Podcasts from './podcasts.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Podcasts />
      </View>
    )
  }
}
