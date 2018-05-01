import React from 'react'
import {
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
  Text,
  View
} from 'react-native'

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
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                <Image
                  style={{ width: 185, height: 200 }}
                  source={{ uri: 'http://localhost:3000/' + item.image }}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }
}
