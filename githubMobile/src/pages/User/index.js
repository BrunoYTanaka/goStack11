import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native'
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles'
import api from '../../services/api'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      stars: [],
      loading: false,
      page: 1,
      refreshing: false,
    }
  }

  async componentDidMount() {
    const { navigation } = this.props
    this.setState({ loading: true })
    const { index } = navigation.dangerouslyGetState()
    const { user } = navigation.dangerouslyGetState().routes[index].params
    navigation.setOptions({ title: user.name })

    const response = await api.get(`/users/${user.login}/starred`)
    this.setState({
      user,
      stars: response.data,
      loading: false,
      page: 2,
    })
  }

  loadMore = async () => {
    const { stars, user, page } = this.state

    const response = await api.get(`/users/${user.login}/starred?page=${page}`)
    this.setState({
      stars: [...stars, ...response.data],
      page: page + 1,
    })
  }

  refreshList = async () => {
    const { user } = this.state

    this.setState({ refreshing: true })

    const response = await api.get(`/users/${user.login}/starred`)
    this.setState({
      stars: response.data,
      page: 2,
      refreshing: false,
    })
  }

  handleNavigate = (repository) => {
    const { navigation } = this.props
    navigation.navigate('Repository', { repository })
  }

  render() {
    const { stars, user, loading, refreshing } = this.state

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <ActivityIndicator color="#000" size={50} />
        ) : (
          <Stars
            data={stars}
            keyExtractor={(star) => String(star.id)}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.ownder}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    )
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    dangerouslyGetState: PropTypes.func,
    setOptions: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
}

export default User
