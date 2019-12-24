import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, CartContainer, CartBadge, Wrapper} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <CartContainer>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <CartBadge>3</CartBadge>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}
