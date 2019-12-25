import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 2px 10px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductDetail = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity`
  text-align: center;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  background: #f1f1f1;
  border-radius: 5px;
  padding: 7px 5px;
  align-items: center;
  margin-top: 5px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmout = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  min-width: 52px;
  height: 30px;
`;

export const ProductsSubtotal = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  margin-top: 10px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #ccc;
  text-transform: uppercase;
  font-size: 20px;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 28px;
`;

export const Order = styled.TouchableOpacity`
  background: #7159c1;
  padding: 18px;
  border-radius: 4px;
  margin-top: 15px;
`;

export const OrderText = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const EmptyCartContainer = styled.View`
  min-height: 200px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const EmptyCartText = styled.Text`
  margin-top: 70px;
  font-size: 25px;
`;
