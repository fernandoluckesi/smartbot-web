import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    
    div {
        background-color: #DFDFDF;
        height: 33px;
        margin: 0 1.5rem;
        width: 1.07px;
    }

    span {
        margin: 0 4px;
    }
`

export const Title = styled(Link)`
    color: var(--text-title);
    font-weight: 500;
    text-decoration: none;
`

export const Subtitle = styled(Link)`
    color: var(--green);
    text-decoration: none;
`
