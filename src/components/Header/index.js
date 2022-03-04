import React from 'react';
import columnChartImg from '../../assets/column-chart.svg';
import {
    Container,
    Title,
    Subtitle,
} from './styles';

export function Header({ navigationTitles }) {
    return (
        <Container>
            <img src={columnChartImg} alt="Gráfico de colunas" />
            <div></div>
            <Title to="/general">{navigationTitles.title}</Title>
            <span>/</span>
            <Subtitle to="/general">{navigationTitles.subtitle}</Subtitle>
        </Container>
    )
}