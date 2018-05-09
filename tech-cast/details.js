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
            fontWeight: '800',
            fontSize: 18
          }}
        >
          {this.props.details.title}
        </Text>
        <Text
          style={{
            padding: 10,
            marginTop: 10,
            fontSize: 20
          }}
        >
          Description:
        </Text>
        <Text style={{ paddingLeft: 14, paddingRight: 14, marginTop: 10 }}>
          {this.props.details.description}
        </Text>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            marginTop: 10
          }}
        >
          Episodes:
        </Text>
        <FlatList
          style={{ marginTop: 10, paddingLeft: 14, paddingRight: 14 }}
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
