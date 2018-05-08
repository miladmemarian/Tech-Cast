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
          style={{ height: 350 }}
          source={{ uri: this.props.details.image }}
        />
        <Text
          style={{
            padding: 2,
            marginTop: 10,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          {this.props.details.title}
        </Text>
        <Text style={{ padding: 2, marginTop: 10, fontStyle: 'italic' }}>
          Description:
        </Text>
        <Text style={{ padding: 2, marginTop: 10 }}>
          {this.props.details.description}
        </Text>
        <Text style={{ padding: 2, marginTop: 10, fontStyle: 'italic' }}>
          Episodes:
        </Text>
        <FlatList
          style={{ marginTop: 10 }}
          data={this.props.details.episodes}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <View>
              <Text>{'Title:' + ' ' + item.title}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}
