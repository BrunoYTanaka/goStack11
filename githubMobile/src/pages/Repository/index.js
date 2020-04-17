import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native-webview'

class Repository extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repository: {},
    }
  }

  async componentDidMount() {
    const { navigation } = this.props
    const { index } = navigation.dangerouslyGetState()
    const { repository } = navigation.dangerouslyGetState().routes[index].params
    this.setState({ repository })
    navigation.setOptions({ title: repository.name })
  }

  render() {
    const { repository } = this.state
    return (
      <WebView
        source={{ uri: repository.html_url }}
        style={{ marginTop: 20 }}
      />
    )
  }
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    dangerouslyGetState: PropTypes.func,
    setOptions: PropTypes.func,
  }).isRequired,
}

export default Repository
