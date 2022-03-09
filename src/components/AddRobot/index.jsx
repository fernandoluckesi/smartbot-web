import React from 'react';
import {
    ButtonStyled,
    Container,
    TextStyled,
} from './styles';
import { Shape } from '../Shape';
import { AddRobotSvgBtn } from '../AddRobotSvgBtn';
import { useRobots } from '../../hooks/useRobots';

export function AddRobot() {
    const { setIsNewRobotModalOpen } = useRobots();

    const handleOpenNewRobotModalOpen = () => {
        setIsNewRobotModalOpen(true);
    }
    return (
        <Shape marginBottom={'1rem'}>
            <Container>
                <AddRobotSvgBtn
                    onClick={handleOpenNewRobotModalOpen}
                />
                <div>
                    <ButtonStyled
                        onClick={handleOpenNewRobotModalOpen}
                    >
                        Adicionar novo Robô
                    </ButtonStyled>
                    <TextStyled>
                        Você possui <span>02 Robôs</span> disponíveis
                    </TextStyled>
                </div>
            </Container>
        </Shape>
    )
}
