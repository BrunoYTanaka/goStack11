import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Logo, Wrapper, BasketContainer, ItemCount } from './styles'

function Header({ navigation }) {
  const navigateTo = () => {
    console.log('navigation: ', navigation)
    return navigation.navigate('Cart')
  }

  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigateTo()}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  )
}

export default Header
