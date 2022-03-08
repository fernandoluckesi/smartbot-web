import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    
    div {
        margin-left: 1.5rem;
    }
`
export const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    color: var(--text-title);
    font-weight: 500;
    transition: filter 0.3s;
    &:hover {
        filter: brightness(0.2);
    }
`

export const TextStyled = styled.p`
    color: var(--text-body);
    font-size: 12px;

    span {
        color: var(--green);
        font-weight: 500;
    }
`