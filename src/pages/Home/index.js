import React, {Component} from 'react';
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
// import {formatPrice} from '../../util/format';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = (await api.get('products')).data;

    const data = response.map(product => ({
      ...product,
      priceFormatted: product.price,
    }));

    this.setState({
      products: data,
    });
  }

  handleAddToCart = productID => {
    const {addToCartRequest} = this.props;
    addToCartRequest(productID);
  };

  renderProduct = ({item}) => {
    const {amount} = this.props;
    return (
      <Product>
        <ProductPicture
          source={{
            uri: item.image,
          }}
        />
        <ProductName>{item.title}</ProductName>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <ButtonContainer onPress={() => this.handleAddToCart(item.id)}>
          <CartIcon>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <CartAmount>{amount[item.id] || 0}</CartAmount>
          </CartIcon>
          <AddToCartText>ADICIONAR</AddToCartText>
        </ButtonContainer>
      </Product>
    );
  };

  render() {
    const {products} = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
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
