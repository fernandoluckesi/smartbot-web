import React from 'react';
import { AddRobot } from '../../components/AddRobot';
import { Header } from '../../components/Header';
import { Resume } from '../../components/Resume';
import { RobotsContainer } from '../../components/RobotsContainer';
import { RobotsProvider } from '../../hooks/useRobots';
import { Container } from './styles';

export function General() {

    const navigationTitles = {
        title: 'Análise Geral',
        subtitle: 'Principal'
    }

    return (
        <RobotsProvider>
            <Container>
                <Header navigationTitles={navigationTitles} />
                <Resume />
                <AddRobot />
                <RobotsContainer />
            </Container>
        </RobotsProvider>
    )
}
