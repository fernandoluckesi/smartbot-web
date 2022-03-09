import React, { useState } from 'react';
import { NewRobotModal } from '../NewRobotModal';
import { Robot } from '../Robot';
import { Container } from './styles';

const mocks = [
    1, 2, 3, 4, 5, 6, 7, 8
]

export function RobotsContainer() {
    const [isNewRobotModalOpen, setIsNewRobotModalOpen] = useState(false);

    const handleOpenNewRobotModalOpen = () => {
        setIsNewRobotModalOpen(true);
    }

    const handleCloseNewRobotModalOpen = () => {
        setIsNewRobotModalOpen(false);
    }

    return (
        <Container>
            {
                mocks.map(() => {
                    return (
                        <Robot />
                    )
                })
            }
            <NewRobotModal
                isOpen={isNewRobotModalOpen}
                onRequestClose={handleCloseNewRobotModalOpen}
            />
        </Container>
    );
}