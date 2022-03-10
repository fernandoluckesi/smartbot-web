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
    ExampleInput,
    StrategyTypesContainer,
    StrategyTypesTitle,
    StrategyButton,
    ActionsButtonsContainer,
    CancelButton,
    CreateRobotButton,
} from './styles';
import closeBtnImg from '../../assets/close-btn.svg';
import { InputErrorMsg } from '../InputErrorMsg';

export function NewRobotModal() {
    const { isNewRobotModalOpen, setIsNewRobotModalOpen, createRobot } = useRobots();
    const [strategyType, setStrategyType] = useState('tangram');
    const [productName, setProductName] = useState('');
    const [robotStartValue, setRobotStartValue] = useState('');
    const [productNameError, setProductNameError] = useState(false);
    const [robotStartValueError, setRobotStartValueError] = useState(false);

    const handleCreateNewRobot = async (event) => {
        event.preventDefault();

        const strategyId = strategyType === 'tangram' ? 2 : 1;

        if (!productName) setProductNameError(true);
        if (!robotStartValue) setRobotStartValueError(true);

        if(productNameError || robotStartValueError) return;

        await createRobot({
            title: productName,
            mode: 0,
            strategy_id: strategyId,
            initial_capital: robotStartValue,
            simulation: 0,
            broker_id: 1
        });

        setIsNewRobotModalOpen(false);
    }

    const handleCloseNewRobotModalOpen = () => {
        setIsNewRobotModalOpen(false);
        setProductName('');
        setRobotStartValue('');
        setProductNameError(false);
        setRobotStartValueError(false);
    }

    const handleSaveProductName = (value) => {
        if (!value) {
            setProductNameError(true);
        } else {
            setProductNameError(false);
        }
        setProductName(value);
    }

    const handleSaveRobotStartValue = (value) => {
        if (!value) {
            setRobotStartValueError(true);
        } else {
            setRobotStartValueError(false);
        }
        const formatValue = value.replace(',', '.');
        setRobotStartValue(Number(formatValue));
    }

    const handleOnBlurInput = (state, setState) => {
        if (!state) {
            setState(true);
        }
    }

    return (
        <Modal
            isOpen={isNewRobotModalOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewRobot}>
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
                    <InputStyled
                        placeholder="Nome do produto"
                        onChange={(event) => handleSaveProductName(event.target.value)}
                        onBlur={() => handleOnBlurInput(productName, setProductNameError)}
                        value={productName}
                    />
                    <InputErrorMsg
                        showError={productNameError}
                        errorMsg={'Nome do produto deve ser preenchido'}
                    />
                    <LabelStyled>Capital inicial do robô</LabelStyled>
                    <InputStyled
                        placeholder="R$"
                        onChange={(event) => handleSaveRobotStartValue(event.target.value)}
                        onBlur={() => handleOnBlurInput(robotStartValue, setRobotStartValueError)}
                        value={robotStartValue}
                        type="number"
                    />
                    <ExampleInput>
                        Exemplo: 1500.45
                    </ExampleInput>
                    <InputErrorMsg
                        showError={robotStartValueError}
                        errorMsg={'Capital inicial deve ser preenchido'}
                    />
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
                    <CancelButton onClick={handleCloseNewRobotModalOpen}>
                        Cancelar
                    </CancelButton>
                    <CreateRobotButton type="submit">
                        Criar robô
                    </CreateRobotButton>
                </ActionsButtonsContainer>
            </Container>
        </Modal>
    )
}