import React from 'react';
import {
  Container,
  Title,
  ContentCard,
  Codig,
  Card,
  CardTitle,
  CardDetails,
  CardImage,
  ContainerCard,
  PaymentText,
} from './styles';

import { Ionicons, Octicons } from '@expo/vector-icons';
import cartao from '../../images/credit-card.png';

export default function Payment() {
  return (
    <Container>
      <Title>Forma de pagamento</Title>

      <ContainerCard>
        <ContentCard>
          <Card>
            <CardTitle>Cadastre seu cartão de crédito</CardTitle>
            <CardDetails>
              Cadastre seu cartão de crédito para fazer pagamento mesmo quando
              não tiver saldo em sua conta
            </CardDetails>
          </Card>
          <CardImage source={cartao} />
        </ContentCard>
        <PaymentText>
          <Ionicons name="add-circle-outline" size={18} color="#00ac4a" />
          Adicionar Cartão de Crédito
        </PaymentText>
      </ContainerCard>
      <Codig>
        <Octicons name="diff-added" size={18} color="#00ac4a" />
        Usar código promocional
      </Codig>
    </Container>
  );
}
