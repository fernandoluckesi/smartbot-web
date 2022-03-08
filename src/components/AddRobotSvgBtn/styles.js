import styled from "styled-components";

export const SvgStyled = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    
    svg {
        transition: filter 0.3s;
        &:hover {
            cursor: pointer;
            filter: brightness(0.9);
        }
    }
`
