import React, { useState } from 'react';
import { AddRobot } from '../../components/AddRobot';
import { Header } from '../../components/Header';
import { NewRobotModal } from '../../components/NewRobotModal';
import { Resume } from '../../components/Resume';
import { RobotsContainer } from '../../components/RobotsContainer';
import { Container } from './styles';

export function General() {

    const navigationTitles = {
        title: 'Análise Geral',
        subtitle: 'Principal'
    }

    return (
        <Container>
            <Header navigationTitles={navigationTitles} />
            <Resume />
            <AddRobot />
            <RobotsContainer />
        </Container>
    )
}
