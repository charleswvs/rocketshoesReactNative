import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

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
  EmptyCartContainer,
  EmptyCartText,
} from './styles';

function Cart({cart, total, updateAmountRequest, removeFromCart, navigation}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      {cart.length ? (
        <>
          <Products>
            {cart.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage
                    source={{
                      uri: product.image,
                    }}
                  />
                  <ProductDetail>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDetail>
                  <ProductDelete onPress={() => removeFromCart(product.id)}>
                    <Icon name="delete-forever" size={30} color="#7159c1" />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </ProductControlButton>
                  <ProductAmout value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </ProductControlButton>
                  <ProductsSubtotal>{product.subtotal}</ProductsSubtotal>
                </ProductControls>
              </Product>
            ))}
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <EmptyCartText>Seu Carrinho está vazio!</EmptyCartText>
          <Order onPress={() => navigation.navigate('Home')}>
            <OrderText>COMPRAR PRODUTOS</OrderText>
          </Order>
        </EmptyCartContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce(
    (total, product) => total + product.price * product.amount,
    0,
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
