import React from 'react';
import { Robot } from '../Robot';
import { Container } from './styles';

const mocks = [
    1, 2, 3, 4, 5, 6, 7, 8
]

export function RobotsContainer() {
    return(
        <Container>
            <Robot />
            <Robot />
            <Robot />
            <Robot />
            <Robot />
            <Robot />
        </Container>
    );
}