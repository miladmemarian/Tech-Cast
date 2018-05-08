import React from 'react'
import { TouchableOpacity, Image, FlatList, Text, View } from 'react-native'
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
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1, width: '100%' }}
          horizontal={false}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          data={searched}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity onPress={() => this.props.renderDetails(index)}>
                <Image
                  style={{ width: 188, height: 200 }}
                  source={{ uri: item.image }}
                />
                <View style={{ alignSelf: 'flex-start' }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontWeight: 'bold'
                    }}
                  >
                    {TrimPodcastTitle(item.title_original)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}
