import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`
export const ProductList = styled.View``

export const Product = styled.View``

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`

export const ProductTitle = styled.Text`
  font-size: 14px;
`

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`
export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  margin-top: 10px;
  border-radius: 4px;
`
export const ProductControlButton = styled.TouchableOpacity``

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`

export const ProductSubtotal = styled.Text`
  margin-left: auto;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
`

export const TotalContainer = styled.View`
  margin-top: 32px;
  align-items: center;
`

export const TotalText = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`
export const TotalAmount = styled.Text`
  color: #000;
  font-size: 30px;
  font-weight: bold;
`

export const OrderButton = styled.TouchableOpacity`
  margin-top: 20px;
  border-radius: 4px;
  background: #7159c1;
  align-items: center;
  flex-direction: row;
  height: 42px;
`
export const OrderButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`
