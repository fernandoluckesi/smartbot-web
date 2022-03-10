import React from 'react';
import { AddRobot } from '../../components/AddRobot';
import { AlertMessage } from '../../components/AlertMessage';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { Resume } from '../../components/Resume';
import { RobotsContainer } from '../../components/RobotsContainer';
import { RobotsProvider, useRobots } from '../../hooks/useRobots';
import { Container } from './styles';

export function General() {

    const { isLoadingOverview, isLoadingRobots, showAlert } = useRobots();

    const navigationTitles = {
        title: 'Análise Geral',
        subtitle: 'Principal'
    }

    if (isLoadingOverview || isLoadingRobots) {
        return (
            <Container>
                <Header navigationTitles={navigationTitles} />
                <Loading />
            </Container>
        )
    }

    return (
        <Container>
            <Header navigationTitles={navigationTitles} />
            <Resume />
            <AddRobot />
            <RobotsContainer />
            <AlertMessage
                message={'Robô cadastrado com sucesso'}
                type={'success'}
                isOpen={showAlert}
            />
        </Container>
    )
}
