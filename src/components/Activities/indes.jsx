import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
} from './styles';

import avatar from '../../images/avatar.png';

export const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@igorheije</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>IgorHeije</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 0,00</Value>
            <Divider />
            <Feather name="lock" color="white" />
            <Date>há dois anos</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  );
};
