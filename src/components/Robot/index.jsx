import React from 'react';
import {
    Container,
    RobotId,
    RobotTitle,
    Status,
    Tags,
    TextTag,
    RobotPaperInfos,
    PaperPosition,
    PaperName,
    PaperValues,
    DailyBalance,
    DailyTrades,
} from './styles';

import arrowSolidUpImg from '../../assets/arrow-solid-up.svg';
import arrowSolidDownImg from '../../assets/arrow-solid-down.svg';
import arrowOutlineImg from '../../assets/arrow-outline.svg';

const dailyBalanceValue = -220;

export function Robot({ dataRobot }) {
    return (
        <Container>
            <RobotTitle>{dataRobot.title}</RobotTitle>
            <RobotId>#{dataRobot.id}</RobotId>
            <Tags>
                <TextTag>
                    {dataRobot.type}
                </TextTag>
                <TextTag>
                    {dataRobot.stock_codes}
                </TextTag>
                <TextTag>
                    {dataRobot.strategy}
                </TextTag>
            </Tags>
            <Status isRunning={dataRobot.running === 1}>
                <span>&#8226;</span>
                {dataRobot.running === 1 ? 'Em execução' : 'Parado'}
            </Status>
            <RobotPaperInfos>
                <PaperPosition>
                    {dataRobot.last_paper ? dataRobot.last_paper.position : '#'}
                </PaperPosition>
                <PaperName>
                    <p>
                        {dataRobot.last_paper ? dataRobot.last_paper.paper : '#'}
                    </p>
                    <p>
                        {dataRobot.last_paper?.type === 0 && 'Venda'}
                        {dataRobot.last_paper?.type === 1 && 'Compra'}
                    </p>
                </PaperName>
                <PaperValues
                    valueType={
                        (dataRobot.last_paper?.profit < 0 && 'negative') ||
                        (dataRobot.last_paper?.profit >= 0 && 'positive')
                    }
                >
                    <p>
                        {dataRobot.last_paper ? dataRobot.last_paper.paper_value : '#'}
                    </p>
                    <p>
                        <img
                            src={dataRobot.last_paper?.profit >= 0 ? arrowSolidUpImg : arrowSolidDownImg}
                            alt="seta verde para cima" />
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(dataRobot.last_paper?.profit || 0)}
                    </p>
                </PaperValues>
            </RobotPaperInfos>
            <DailyBalance
                valueType={dataRobot.daily_balance > 0 ? 'positive' : 'negative'}
            >
                <p>
                    Saldo diário
                    <img src={arrowOutlineImg} alt="seta para baixo" />
                </p>
                <p>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(dataRobot.daily_balance)}
                </p>
            </DailyBalance>
            <DailyTrades>
                <p>Trades no dia</p>
                <p>{dataRobot.number_trades}</p>
            </DailyTrades>
        </Container>
    )
}