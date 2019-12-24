import React from 'react';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, CartContainer, CartBadge, Wrapper} from './styles';

function Header({navigation, cartSize}) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <CartBadge>{cartSize || 0}</CartBadge>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null,
)(Header);
