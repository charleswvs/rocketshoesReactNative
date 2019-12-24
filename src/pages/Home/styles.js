import styled from 'styled-components/native';
import {darken} from 'polished';

export const Container = styled.View`
  background: #191920;
  margin-top: 50px;
`;
export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;
export const ProductPicture = styled.Image`
  height: 200px;
  width: 200px;
`;
export const ProductName = styled.Text`
  font-size: 16px;
  overflow: visible;
`;
export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;
export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  background: #7159c1;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;
export const CartIcon = styled.View`
  flex-direction: row;
  background: ${darken(0.3, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 12px;
  align-items: center;
`;
export const CartAmount = styled.Text`
  font-size: 16px;
  margin-left: 4px;
  color: #fff;
`;
export const AddToCartText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
