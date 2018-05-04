import React from 'react'
import { View } from 'react-native'
import Podcasts from './podcasts'
import SearchBar from './searchBar'
import Details from './details'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.renderDetails = this.renderDetails.bind(this)
    this.state = { podcasts: [], keyword: '', showDetails: false, details: {} }
  }

  componentDidMount() {
    fetch('http://a4f8f2c2.ngrok.io', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts: podcasts.results }))
      .catch(err => console.error(err))
  }

  renderDetails(podcastIndex) {
    this.setState({ showDetails: true })
    const url =
      'http://a4f8f2c2.ngrok.io/id/' + this.state.podcasts[podcastIndex].id
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

  render() {
    const podcastSelected = this.state.showDetails ? (
      <Details
        details={this.state.details}
        podcasts={this.state.podcasts}
        style={{ flex: 1 }}
      />
    ) : (
      <View style={{ flex: 1 }}>
        <Podcasts
          podcasts={this.state.podcasts}
          searchPodcasts={this.searchPodcasts}
          keyword={this.state.keyword}
          renderDetails={this.renderDetails}
        />
        <SearchBar handleTextChange={this.handleTextChange} />
      </View>
    )
    return <View style={{ flex: 1, marginTop: 20 }}>{podcastSelected}</View>
  }
}
