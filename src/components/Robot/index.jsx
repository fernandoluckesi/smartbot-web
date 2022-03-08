import React from 'react';
import {
    Container,
    RobotId,
    RobotTitle,
    Status,
    Tags,
    TextTag,
    RobotPaperInfos,
    PaperNumber,
    PaperName,
    PaperValues,
    DailyBalance,
    DailyTrades,
} from './styles';

import arrowSolidImg from '../../assets/arrow-solid.svg';
import arrowOutlineImg from '../../assets/arrow-outline.svg';

const dailyBalanceValue = -220;

export function Robot() {
    return (
        <Container>
            <RobotTitle>Título do Robô</RobotTitle>
            <RobotId>#1792301</RobotId>
            <Tags>
                <TextTag>
                    Pessimista
                </TextTag>
                <TextTag>
                    WIN%
                </TextTag>
                <TextTag>
                    Price action
                </TextTag>
            </Tags>
            <Status>
                <span>&#8226;</span>
                Em execução
            </Status>
            <RobotPaperInfos>
                <PaperNumber>30</PaperNumber>
                <PaperName>
                    <p>WING20</p>
                    <p>Compra</p>
                </PaperName>
                <PaperValues>
                    <p>114.093.33</p>
                    <p>
                        <img src={arrowSolidImg} alt="seta verde para cima" />
                        R$92,33
                    </p>
                </PaperValues>
            </RobotPaperInfos>
            <DailyBalance>
                <p>
                    Saldo diário
                    <img src={arrowOutlineImg} alt="seta para baixo" />
                </p>
                <p>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(dailyBalanceValue)}
                </p>
            </DailyBalance>
            <DailyTrades>
                <p>Trades no dia</p>
                <p>7</p>
            </DailyTrades>
        </Container>
    )
}