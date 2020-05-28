import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  ProductList,
  Product,
  ProductInfo,
  ProductDetails,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  OrderButton,
  OrderButtonText,
} from './styles'

class Cart extends Component {
  state = {
    products: [
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
    ],
  }

  render() {
    const { products } = this.state
    return (
      <Container>
        <>
          <ProductList>
            {products.map((product) => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />
                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete>
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductAmount>3</ProductAmount>
                  <ProductControlButton>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductControlButton>
                  <ProductSubtotal>{product.price}</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
          </ProductList>
        </>
        <TotalContainer>
          <TotalText>Total</TotalText>
          <TotalAmount>R$ 1890,00</TotalAmount>
          <OrderButton onPress={() => {}}>
            <OrderButtonText>Finalizar Pedido</OrderButtonText>
          </OrderButton>
        </TotalContainer>
      </Container>
    )
  }
}

export default Cart
