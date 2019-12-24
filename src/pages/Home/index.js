import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductPicture,
  ProductName,
  ProductPrice,
  ButtonContainer,
  CartIcon,
  CartAmount,
  AddToCartText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Product>
        <ProductPicture
          source={{
            uri:
              'https://static.netshoes.com.br/produtos/tenis-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg?ims=544x',
          }}
        />
        <ProductName>Tenis de caminhada leve e confortavel</ProductName>
        <ProductPrice>R$159,90</ProductPrice>
        <ButtonContainer>
          <CartIcon>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <CartAmount>3</CartAmount>
          </CartIcon>
          <AddToCartText>ADICIONAR</AddToCartText>
        </ButtonContainer>
      </Product>
    </Container>
  );
}
