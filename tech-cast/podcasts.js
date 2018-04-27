/* eslint-disable no-unused-vars */
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  List,
  FlatList,
  ListItem,
  Linking,
  Text,
  View
} from 'react-native'

export default class Podcasts extends React.Component {
  constructor(props) {
    super(props)
    this.state = { podcasts: [] }
  }
  componentDidMount() {
    fetch('http://localhost:3000/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts }))
      .catch(err => console.error(err))
  }

  keyExtractor(item, index) {
    return item.id.toString()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1, width: '100%' }}
          horizontal={false}
          numColumns={2}
          keyExtractor={this.keyExtractor}
          data={this.state.podcasts}
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
