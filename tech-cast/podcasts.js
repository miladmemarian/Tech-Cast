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
  keyExtractor(item, index) {
    return item.id.toString()
  }
  render() {
    const list = [
      {
        id: 0,
        name: 'Ted Talk',
        url:
          'http://feedproxy.google.com/~r/TEDTalks_audio/~5/-HOjYgMjDNs/ClemantineWamariya_2017W.mp3',
        image: require('./images/TED-Talks-Daily.png')
      },
      {
        id: 1,
        name: 'This Week in Tech',
        url:
          'http://www.podtrac.com/pts/redirect.mp3/cdn.twit.tv/audio/twit/twit0663/twit0663.mp3',
        image: require('./images/This-Week-in-Tech.jpg')
      },
      {
        id: 2,
        name: 'This is Only a Test',
        url:
          'http://media.blubrry.com/thisisonlyatest/d2rormqr1qwzpz.cloudfront.net/podcast/thisisonlyatest_20180419.mp3',
        image: require('./images/This-is-Only-a-Test.jpg')
      },
      {
        id: 3,
        name: 'The vergecast',
        url:
          'http://feedproxy.google.com/~r/ThisIsMyNextPodcast/~5/yBRjmz3jJOo/358f121e-906e-45b3-91b3-d88fe44d95a4.mp3',
        image: require('./images/The-Vergecast.jpg')
      },
      {
        id: 4,
        name: 'TechStuff',
        url:
          'https://www.podtrac.com/pts/redirect.mp3/traffic.megaphone.fm/HSW2985077029.mp3',
        image: require('./images/TechStuff.jpg')
      },
      {
        id: 5,
        name: 'Reply All',
        url:
          'https://traffic.megaphone.fm/GLT2084498231.mp3?updated=1524201373',
        image: require('./images/Reply-All.png')
      },
      {
        id: 6,
        name: 'Chips with everything',
        url:
          'https://flex.acast.com/audio.guim.co.uk/2018/04/19-52864-gnl.chips.20042018.ds.googlegdpr.mp3',
        image: require('./images/Chips-with-everything.jpg')
      },
      {
        id: 7,
        name: 'Triangulation',
        url:
          'http://www.podtrac.com/pts/redirect.mp3/cdn.twit.tv/audio/tri/tri0343/tri0343.mp3',
        image: require('./images/Triangulation.jpg')
      },
      {
        id: 8,
        name: 'Note to Self',
        url:
          'https://www.podtrac.com/pts/redirect.mp3/audio.wnyc.org/notetoself/notetoself041818_cms847589_pod.mp3',
        image: require('./images/Note-to-Self.jpg')
      },
      {
        id: 9,
        name: 'Daily Tech News Show',
        url:
          'https://feeds.soundcloud.com/stream/434643060-dtns-dtns-3268-amazons-junk-in-your-trunk.mp3',
        image: require('./images/Daily-Tech-News-Show.png')
      }
    ]
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
              <Image style={{ width: '100%' }} source={item.image} />
              <Text
                style={{
                  textAlign: 'center',
                  margin: '2%',
                  fontStyle: 'italic',
                  fontWeight: 'bold'
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}
