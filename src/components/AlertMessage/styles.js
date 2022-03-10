import styled, { keyframes } from "styled-components";

const showAlert = keyframes`

    0% {
        right: -327px; 
    }

    20% {
        right: 1.5rem;  
    }

    25% {
        right: 1rem;  
    }

    80% {
        right: 1rem; 
    }

    85% {
        right: 1.5rem; 
    }

    100% {
        right: -327px; 
    }
`

export const Container = styled.div`
    animation-duration: 5s;
    animation-name: ${showAlert};
    animation-timing-function: ease;
    background-color: ${props => props.type === 'success' ? 'var(--green)' : 'var(--red)'};
    border-radius: 4px;
    bottom: 1.5rem;
    max-width: 310px;
    padding: 2rem 4rem;
    position: fixed;
    right: -327px;
    z-index: 1;
`

export const TextMessage = styled.p`
    color: #FFFF;
    font-weight: 500;
    text-align: center;
`