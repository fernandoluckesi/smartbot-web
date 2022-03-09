import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--shape);
    border-radius: 4px;
    padding: 1rem 2rem;
`

export const BtnCloseModal = styled.button`
    background: transparent;
    border: 0;
    position: absolute;
    right: 2rem;
    transition: filter 0.3s;
    top: 1rem;

    &:hover {
        filter: brightness(0.8);
    }
`

export const Header = styled.header`

    p {
        &:nth-child(1) {
            color: var(--title-text);
            font-weight: 500;
            margin-bottom: 1.5rem;

            @media (max-width: 458px) {
                margin-bottom: 0.75rem;
            }
        }
        
        &:nth-child(3) {
            color: var(--text-subtitle);
            font-size: 12px;
        }
    }

    h1 {
        color: #5F5D60;
        margin-bottom: 5px;
    }

`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`

export const LabelStyled = styled.label`
    color: var(--text-title);
    font-size: 12px;
    margin-bottom: 8px;
`

export const InputStyled = styled.input`
    border: 1px solid #E3E2E3;
    border-radius: 2px;
    margin-bottom: 16px;
    padding: 14px;

    ::placeholder {
        color: var(--text-subtitle);
        font-size: 12px;
    }
`

export const StrategyTypesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @media (max-width: 458px) {
            margin-top: 0.75rem;
        }
`

export const StrategyTypesTitle = styled.p`
    color: var(--text-title);
    font-weight: 500;
    margin-bottom: 1.5rem;

    @media (max-width: 458px) {
        margin-bottom: 1rem;
    }
`

export const StrategyButton = styled.button`
    background-color: ${props => props.isActive ? '#FF4501' : 'transparent'};
    border: 1px solid ${props => props.isActive ? '#FF4501' : '#E3E2E3'};
    border-radius: 2px;
    color: ${props => props.isActive ? '#FFFFFF' : '#6A6C72'};
    font-weight: ${props => props.isActive ? 700 : 400};
    margin-bottom: 0.5rem;
    padding: 1.5rem;
    text-align: start;

    @media (max-width: 458px) {
        padding: 1rem 1.5rem;
    }
`

export const ActionsButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 36px 0 20px;

    @media (max-width: 458px) {
        margin: 18px 0 10px;
    }
`

export const CancelButton = styled.button`
    background-color: transparent;
    border: 1px solid #E3E2E3;
    border-radius: 2px;
    color: #6A6C72;
    font-size: 12px;
    padding: 0.5rem 1rem; 
`

export const CreateRobotButton = styled.button`
    background-color: var(--green);
    border: 1px solid var(--green);
    border-radius: 2px;
    color: #FFFF;
    font-size: 12px;
    font-weight: 500;
    padding: 0.5rem 1rem;
`