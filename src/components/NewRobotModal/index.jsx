import React, { useState } from 'react';
import Modal from 'react-modal';
import { useRobots } from '../../hooks/useRobots';
import {
    Container,
    Header,
    BtnCloseModal,
    Inputs,
    LabelStyled,
    InputStyled,
    StrategyTypesContainer,
    StrategyTypesTitle,
    StrategyButton,
    ActionsButtonsContainer,
    CancelButton,
    CreateRobotButton,
} from './styles';
import closeBtnImg from '../../assets/close-btn.svg';

export function NewRobotModal() {
    const { isNewRobotModalOpen, setIsNewRobotModalOpen } = useRobots();
    const [strategyType, setStrategyType] = useState('tangram');

    const handleCloseNewRobotModalOpen = () => {
        setIsNewRobotModalOpen(false);
    }
    return (
        <Modal
            isOpen={isNewRobotModalOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <BtnCloseModal
                    onClick={handleCloseNewRobotModalOpen}
                    type="button"
                >
                    <img src={closeBtnImg} alt="Fechar modal" />
                </BtnCloseModal>
                <Header>
                    <p>Adicionar novo Robô</p>
                    <h1>Vamos criar seu robô</h1>
                    <p>Preencha as informações abaixo:</p>
                </Header>
                <Inputs>
                    <LabelStyled>Nome do produto</LabelStyled>
                    <InputStyled placeholder="Nome do produto" />
                    <LabelStyled>Capital inicial do robô</LabelStyled>
                    <InputStyled placeholder="R$" />
                </Inputs>
                <StrategyTypesContainer>
                    <StrategyTypesTitle>
                        Selecione uma das estratégias abaixo
                    </StrategyTypesTitle>
                    <StrategyButton
                        type="button"
                        onClick={() => setStrategyType('tangram')}
                        isActive={strategyType === 'tangram'}
                    >
                        Tangram
                    </StrategyButton>
                    <StrategyButton
                        type="button"
                        onClick={() => setStrategyType('priceAction')}
                        isActive={strategyType === 'priceAction'}
                    >
                        Price Action
                    </StrategyButton>
                </StrategyTypesContainer>
                <ActionsButtonsContainer>
                    <CancelButton>
                        Cancelar
                    </CancelButton>
                    <CreateRobotButton>
                        Criar robô
                    </CreateRobotButton>
                </ActionsButtonsContainer>
            </Container>
        </Modal>
    )
}