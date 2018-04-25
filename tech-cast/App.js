/* eslint-disable no-unused-vars */
import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
