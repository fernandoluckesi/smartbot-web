import styled from "styled-components";

export const ShapeContainer = styled.div`
    background-color: var(--shape);
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
    margin-bottom: ${props => props.marginBottom};
    min-width: 306px;
    padding: 1rem 1.6rem;

    @media (max-width: 500px) {
        border-radius: 0;
    }
` 
