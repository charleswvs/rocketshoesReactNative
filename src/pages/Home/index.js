import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

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
import {formatPrice} from '../../util/format';

function Home({amount, addToCartRequest}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price), // the formatted price must be put in the font, or else it will consume resource
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(productID) {
    addToCartRequest(productID);
  }

  function renderProduct({item}) {
    return (
      <Product>
        <ProductPicture
          source={{
            uri: item.image,
          }}
        />
        <ProductName>{item.title}</ProductName>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <ButtonContainer onPress={() => handleAddToCart(item.id)}>
          <CartIcon>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <CartAmount>{amount[item.id] || 0}</CartAmount>
          </CartIcon>
          <AddToCartText>ADICIONAR</AddToCartText>
        </ButtonContainer>
      </Product>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
