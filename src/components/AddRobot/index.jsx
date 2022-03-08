import React from 'react';
import { ButtonStyled, Container, TextStyled } from './styles';
import { Shape } from '../Shape';
import { AddRobotSvgBtn } from '../AddRobotSvgBtn';

export function AddRobot() {
    return (
        <Shape marginBottom={'1rem'}>
            <Container>
            <AddRobotSvgBtn />
            <div>
                <ButtonStyled>
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
