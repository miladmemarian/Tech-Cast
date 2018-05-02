import React from 'react'
import { View } from 'react-native'
import Podcasts from './podcasts'
import SearchBar from './searchBar'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.state = { podcasts: [], keyword: '' }
  }

  componentDidMount() {
    fetch('http://c6a10ddc.ngrok.io', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts }))
      .catch(err => console.error(err))
  }

  handleTextChange(text) {
    this.setState({ keyword: text })
  }

  searchPodcasts(keyword, podcasts) {
    return !keyword
      ? podcasts
      : podcasts.filter(podcast => podcast.name.includes(keyword))
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <Podcasts
          podcasts={this.state.podcasts}
          searchPodcasts={this.searchPodcasts}
          keyword={this.state.keyword}
        />
        <SearchBar handleTextChange={this.handleTextChange} />
      </View>
    )
  }
}
