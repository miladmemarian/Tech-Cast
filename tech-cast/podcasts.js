import React from 'react'
import {
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet
} from 'react-native'
import SearchBar from './searchBar'
const TrimPodcastTitle = require('./trimPodcastTitle')

export default class Podcasts extends React.Component {
  keyExtractor(item, index) {
    return item.id.toString()
  }

  render() {
    const searched = this.props.searchPodcasts(
      this.props.keyword,
      this.props.podcasts
    )
    return (
      <View style={style.container}>
        <FlatList
          style={style.podcasts}
          horizontal={false}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          data={searched}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => this.props.renderDetails(index)}>
              <Image style={style.image} source={{ uri: item.image }} />
              <Text style={style.title}>
                {TrimPodcastTitle(item.title_original)}
              </Text>
            </TouchableOpacity>
          )}
        />
        <SearchBar handleTextChange={this.props.handleTextChange} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  podcasts: {
    flex: 1,
    width: '100%'
  },
  image: {
    width: 188,
    height: 200
  },
  title: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
})
