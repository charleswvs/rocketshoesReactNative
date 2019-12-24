import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  background: #191920;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CartBadge = styled.Text`
  min-height: 18px;
  min-width: 18px;
  text-align: center;
  position: absolute;
  right: -8px;
  top: -8px;
  background: #7159c1;
  border-radius: 50px;
  color: #fff;
  font-size: 12px;
  overflow: hidden;
`;
