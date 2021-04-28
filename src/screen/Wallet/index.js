import React from 'react';

import Balance from '../../components/Balance'

import { Wrapper, Container } from './styles';

export default function Wallet() {
    return <Wrapper>
        <Container >
        <Balance/>
        </Container>
    </Wrapper>
}