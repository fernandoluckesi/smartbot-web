import React from 'react';
import { useRobots } from '../../hooks/useRobots';
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

export function Resume() {
    const { overview } = useRobots();
    console.log(overview)

    return (
        <Shape marginBottom={'1rem'}>
            <Container>
                <h2>Resumo geral operações</h2>
                <SubtitleContainer>
                    <ResumeValue
                        valueType={overview.moviment_summary < 0 ? 'negative' : 'positive'}
                    >
                        <TextResume>Resumo de movimentação</TextResume>
                        <strong>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(overview.moviment_summary)}
                        </strong>
                    </ResumeValue>
                    <TransactionsTotal>
                        <TextResume>Total de transações realizadas</TextResume>
                        <strong>{overview.transactions}</strong>
                    </TransactionsTotal>
                </SubtitleContainer>
                <hr />
                <TextResume>Papéis negociados</TextResume>
                <NegotiatedPapersContainer>
                   {
                        overview.papers?.map((paper, index) => {
                            return (
                                <NegotiatedPaper key={index}>
                                    <p>{paper.name}</p>
                                    <div></div>
                                    <p>{paper.trasactions}</p>
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
