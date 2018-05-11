import React from 'react'
import { View, FlatList, Text, Image, StyleSheet } from 'react-native'

export default class Details extends React.Component {
  keyExtractor(item, index) {
    return item.id.toString()
  }
  render() {
    return (
      <View style={style.container}>
        <Image style={style.image} source={{ uri: this.props.details.image }} />
        <Text style={style.title}>{this.props.details.title}</Text>
        <Text style={style.descriptionTitle}>Description:</Text>
        <Text style={style.description}>{this.props.details.description}</Text>
        <Text style={style.episodesTitle}>Episodes:</Text>
        <FlatList
          style={style.episodes}
          data={this.props.details.episodes}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => <Text>{'Title:' + ' ' + item.title}</Text>}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 350
  },
  title: {
    padding: 2,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18
  },
  descriptionTitle: {
    padding: 10,
    marginTop: 10,
    fontSize: 20
  },
  description: {
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 10
  },
  episodesTitle: {
    fontSize: 20,
    padding: 10,
    marginTop: 10
  },
  episodes: {
    marginTop: 10,
    paddingLeft: 14,
    paddingRight: 14
  }
})
