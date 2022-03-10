import React, { useState } from 'react';
import { useRobots } from '../../hooks/useRobots';
import { NewRobotModal } from '../NewRobotModal';
import { Robot } from '../Robot';
import { Container } from './styles';

const mocks = [
    1, 2, 3, 4, 5, 6, 7, 8
]

export function RobotsContainer() {

    const { robots } = useRobots();

    return (
        <Container>
            {
                robots.map((robot) => {
                    return (
                        <Robot key={robot.id} dataRobot={robot} />
                    )
                })
            }
            <NewRobotModal />
        </Container>
    );
}