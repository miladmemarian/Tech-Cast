import React from 'react'
import { View, FlatList, Text, Image } from 'react-native'

export default class Details extends React.Component {
  keyExtractor(item, index) {
    return item.id.toString()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ height: 200 }}
          source={{ uri: this.props.details.image }}
        />
        <Text style={{ flex: 1, textAlign: 'center' }}>
          {this.props.details.title}
        </Text>
        <View>
          <Text> Episodes: </Text>
          <FlatList
            data={this.props.details.episodes}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <View>
                <Text>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}
