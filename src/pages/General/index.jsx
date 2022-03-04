import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function General() {

    const navigationTitles = {
        title: 'Análise Geral',
        subtitle: 'Principal'
    }

    return (
        <Container>
            <Header navigationTitles={navigationTitles} />
        </Container>
    )
}
