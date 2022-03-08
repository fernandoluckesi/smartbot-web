import styled from "styled-components";

export const ShapeContainer = styled.div`
    background-color: var(--shape);
    border-radius: 8px;
    margin-bottom: ${props => props.marginBottom};
    min-width: 306px;
    padding: 1rem 1.6rem;

    @media (max-width: 500px) {
        border-radius: 0;
    }
` 
