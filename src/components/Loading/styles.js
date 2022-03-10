import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    margin: 30vh auto 0;
    width: fit-content;
`

const spin = keyframes`
    from {
    transform: rotate(0deg);
    }

    to {
    transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
    animation: ${spin} 1s linear infinite;
    border: 10px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: var(--green);
    height: 100px;
    width: 100px;
`
