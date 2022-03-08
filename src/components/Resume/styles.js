import styled from "styled-components";

export const Container = styled.div`
    
    h2 {
        color: var(--text-title);
        font-size: 1rem;
        font-weight: 500;
    }

    hr {
        background-color: #E3E2E3;
        border: none;
        height: 1px;
        margin: 1rem 0;
    }
`

export const SubtitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
`

export const TextResume = styled.p`
    color: var(--text-subtitle);
    font-size: 12px;
`

export const ResumeValue = styled.div`
    p {
        color: var(--text-subtitle);
        font-size: 12px;
    }

    strong {
        color: var(--red);
        font-size: 1.25rem;
    }

`
export const TransactionsTotal = styled.div`
    margin-left: 24px;
    p {
        color: var(--text-subtitle);
        font-size: 12px;
        text-align: right;
    }

    strong {
        color: var(--text-title);
        display: block;
        font-size: 1.25rem;
        text-align: right;
    }
`

export const NegotiatedPapersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
`

export const NegotiatedPaper = styled.div`
   align-items: center;
   display: flex;
   margin-bottom: 0.5rem;
   width: 46%;

   @media (max-width: 640px) {
       width: 100%;
   }

   p {
        &:nth-child(1) {
        background-color: var(--green);
        border-radius: 2px;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 700;
        margin-right: 0.25rem;
        padding: 0.25rem 0.5rem;
        }

        &:nth-child(3) {
            color: var(--text-title);
            font-weight: 700;
            margin: 0 0.25rem;
        }
   }
    div {
        border-top: 1px dashed #E3E2E3;
        width: 100%;
    }
`