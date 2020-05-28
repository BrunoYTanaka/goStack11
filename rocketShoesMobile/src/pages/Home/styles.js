import styled from 'styled-components/native'
import { darken } from 'polished'

export const Container = styled.View`
  padding: 30px;
`

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 50px;
`

export const Product = styled.View`
  width: 270px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 10px;
  align-items: center;
  max-height: 375px;
`

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`

export const ProductTitle = styled.Text`
  font-size: 16px;
`
export const ProductPrice = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin: 14px auto 5px 0;
`
export const ProductButton = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  flex-direction: row;
`

export const ProductAmount = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 12px;
  min-width: 50px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

export const ProductAmountText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
`

export const ProductButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`
