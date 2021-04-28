import React from 'react';
import {
  Header,
  Wrapper,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Container,
} from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Suggestions from '../../components/Suggestions';
import { Activities } from '../../components/Activities/indes';
import Tips from '../../components/Tips';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 1.000.000,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
        <Activities />
        <Tips />
      </Container>
    </Wrapper>
  );
}
