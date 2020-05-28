import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductAmount,
  ProductAmountText,
  ProductButtonText,
} from './styles'

class Home extends Component {
  handleAddProduct = () => {
    const { navigation } = this.props

    console.log('navigation: ', navigation)

    return navigation.navigate('Cart')
  }

  render() {
    return (
      <Container>
        <ProductList
          horizontal
          data={[
            {
              id: 1,
              title: 'Tênis de Caminhada Leve Confortável',
              price: 179.9,
              image:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            },
            {
              id: 2,
              title: 'Tênis de Caminhada Leve Confortável',
              price: 179.9,
              image:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            },
          ]}
          keyExtractor={(product) => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <ProductButton
                onPress={() => {
                  this.handleAddProduct()
                }}
              >
                <ProductAmount>
                  <Icon name="add-shopping-cart" color="#FFF" size={20} />
                  <ProductAmountText>{1}</ProductAmountText>
                </ProductAmount>
                <ProductButtonText>Adicionar</ProductButtonText>
              </ProductButton>
            </Product>
          )}
        />
      </Container>
    )
  }
}

export default Home
