import React from 'react';
import { Shape } from '../Shape';
import {
    Container,
    NegotiatedPapersContainer,
    NegotiatedPaper,
    ResumeValue,
    SubtitleContainer,
    TextResume,
    TransactionsTotal
} from './styles';

const papers = [
    {
        paper: 'WING20',
        traders: 157,
    },
    {
        paper: 'ABEV3',
        traders: 215,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'WING20',
        traders: 157,
    },
    {
        paper: 'ABEV3',
        traders: 215,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'WING20',
        traders: 157,
    },
    {
        paper: 'ABEV3',
        traders: 215,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'WING20',
        traders: 157,
    },
    {
        paper: 'ABEV3',
        traders: 215,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
    {
        paper: 'BOVA11',
        traders: 71,
    },
];

export function Resume() {

    const resumeValue = -220;
    const transactionsTotal = 443;
    return (
        <Shape marginBottom={'1rem'}>
            <Container>
                <h2>Resumo geral operações</h2>
                <SubtitleContainer>
                    <ResumeValue>
                        <TextResume>Resumo de movimentação</TextResume>
                        <strong>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(resumeValue)}
                        </strong>
                    </ResumeValue>
                    <TransactionsTotal>
                        <TextResume>Total de transações realizadas</TextResume>
                        <strong>{transactionsTotal}</strong>
                    </TransactionsTotal>
                </SubtitleContainer>
                <hr />
                <TextResume>Papéis negociados</TextResume>
                <NegotiatedPapersContainer>
                    {
                        papers.map((item) => {
                            return (
                                <NegotiatedPaper>
                                    <p>{item.paper}</p>
                                    <div></div>
                                    <p>{item.traders}</p>
                                    <TextResume>transações</TextResume>
                                </NegotiatedPaper>
                            )
                        })
                    }
                </NegotiatedPapersContainer>
            </Container>
        </Shape>
    );
}
