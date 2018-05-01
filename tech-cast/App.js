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
    fetch('http://localhost:3000/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(podcasts => this.setState({ podcasts }))
      .catch(err => console.error(err))
  }

  handleTextChange(text) {
    this.setState({ keyword: text })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Podcasts podcasts={this.state.podcasts} />
        <SearchBar handleTextChange={this.handleTextChange} />
      </View>
    )
  }
}
