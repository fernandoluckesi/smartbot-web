import React from 'react';
import columnChartImg from '../../assets/column-chart.svg';
import { Shape } from '../Shape';
import {
    Container,
    Title,
    Subtitle,
} from './styles';

export function Header({ navigationTitles }) {
    return (
        <Shape marginBottom={'1.5rem'}>
            <Container>
                <img src={columnChartImg} alt="Gráfico de colunas" />
                <div></div>
                <Title to="/general">{navigationTitles.title}</Title>
                <span>/</span>
                <Subtitle to="/general">{navigationTitles.subtitle}</Subtitle>
            </Container>
        </Shape>
    )
}