import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetail,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmout,
  ProductsSubtotal,
  TotalContainer,
  TotalText,
  TotalPrice,
  Order,
  OrderText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_zoom1.jpg?ims=544x',
              }}
            />
            <ProductDetail>
              <ProductTitle>Tenis de caminhada leve e confortável</ProductTitle>
              <ProductPrice>R$179,90</ProductPrice>
            </ProductDetail>
            <ProductDelete>
              <Icon name="delete-forever" size={30} color="#7159c1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon name="remove-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductAmout value="4" />
            <ProductControlButton>
              <Icon name="add-circle-outline" size={20} color="#7159c1" />
            </ProductControlButton>
            <ProductsSubtotal>R$ 1500,00</ProductsSubtotal>
          </ProductControls>
        </Product>
        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>R$ 1619,10</TotalPrice>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </Products>
    </Container>
  );
}
