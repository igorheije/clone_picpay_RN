import React from 'react';

import Balance from '../../components/Balance'
import Payment from '../../components/Payment';

import { Wrapper, Container } from './styles';

export default function Wallet() {
    return (
        <Wrapper>
            <Container >
                <Balance />
                <Payment/>
            </Container>
        </Wrapper>
    )
}