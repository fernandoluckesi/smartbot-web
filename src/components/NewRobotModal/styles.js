import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--shape);
    padding: 1rem 2rem;
`

export const Header = styled.header`

    p {
        &:nth-child(1) {
            color: var(--title-text);
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        &:nth-child(2) {
            color: var(--subtitle-text);
            font-size: 12;
        }
    }

    h1 {
        color: #5F5D60;
        
    }

`