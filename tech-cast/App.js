import React from 'react'
import { View, StyleSheet } from 'react-native'
import Podcasts from './podcasts'
import Details from './details'
import Expo from 'expo'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.renderDetails = this.renderDetails.bind(this)
    this.playPodcast = this.playPodcast.bind(this)
    this.state = {
      podcasts: [],
      keyword: '',
      showDetails: false,
      details: {},
      played: false,
      soundObject: {}
    }
  }

  componentDidMount() {
    fetch('http://06ac814d.ngrok.io', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts: podcasts.results }))
      .catch(err => console.error(err))
    this.setState({
      soundObject: new Expo.Audio.Sound()
    })
  }

  renderDetails(podcastIndex) {
    this.setState({ showDetails: true })
    const url =
      'http://06ac814d.ngrok.io/id/' + this.state.podcasts[podcastIndex].id
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(details => this.setState({ details }))
      .catch(err => console.error(err))
  }

  handleTextChange(text) {
    this.setState({ keyword: text })
  }

  searchPodcasts(keyword, podcasts) {
    return !keyword
      ? podcasts
      : podcasts.filter(podcast => podcast.title_original.includes(keyword))
  }
  async playPodcast(item) {
    if (!this.state.played) {
      try {
        await this.state.soundObject.loadAsync({ uri: item.audio })
        await this.state.soundObject.playAsync()
        this.setState({
          played: true
        })
      }
      catch (err) {
        console.error(err)
      }
    }
    else {
      try {
        await this.state.soundObject.stopAsync()
        await this.state.soundObject.unloadAsync()
        this.setState({
          played: false
        })
      }
      catch (err) {
        console.error(err)
      }
    }
  }

  render() {
    const podcastSelected = this.state.showDetails ? (
      <Details
        details={this.state.details}
        podcasts={this.state.podcasts}
        playPodcast={this.playPodcast}
      />
    ) : (
      <Podcasts
        podcasts={this.state.podcasts}
        searchPodcasts={this.searchPodcasts}
        keyword={this.state.keyword}
        renderDetails={this.renderDetails}
        handleTextChange={this.handleTextChange}
      />
    )
    return <View style={styles.container}>{podcastSelected}</View>
  }
}

const styles = StyleSheet.create({ container: { flex: 1, marginTop: 20 } })
