import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  Container,
  Title,
  ActiveBalance,
  ActiveBalanceText,
  Subtitle,
  BalanceValue,
  AreaButtons,
  Button,
  TextButton,
} from './styles';
import { AntDesign, FontAwesome5, FontAwesome } from '@expo/vector-icons';

const Balance = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Container
        colors={isEnabled ? ['#00fc66', '#00ac4a'] : ['#767577', '#3e3e3e']}
        start={[1, 0.2]}
      >
        <Title>Saldo no PicPay</Title>
        <BalanceValue>
          R$ 1.000.000,00 <AntDesign name="eyeo" size={24} color="white" />
        </BalanceValue>
        <Subtitle>Seu saldo está rendendo a 150% no CDI</Subtitle>
        <AreaButtons>
          <Button>
            <TextButton>
              <FontAwesome5 name="money-bill" size={18} color="white" />
              Adicionar
            </TextButton>
          </Button>
          <Button>
            <TextButton>
              <FontAwesome name="bank" size={18} color="white" /> Retirar
            </TextButton>
          </Button>
        </AreaButtons>
      </Container>
      <ActiveBalance>
        <ActiveBalanceText>Usar saldo ao pagar</ActiveBalanceText>
        <Switch
          trackColor={{ false: '#767577', true: '#00fc66' }}
          thumbColor={isEnabled ? '#00ac4a' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ActiveBalance>
    </>
  );
};

export default Balance;
