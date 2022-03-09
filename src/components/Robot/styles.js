import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--shape);
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.097543);
    margin: 0 1rem 1.5rem 0;
    padding: 1rem 1.5rem;
    position: relative;
    width: calc((100% - 3*1rem) * 0.25);

    @media (min-width: 1260px) {
        &:nth-child(4n) {
            margin-right: 0;
        }
    }
    
    @media (min-width: 900px) and (max-width: 1259px) {
        width: calc((100% - 2*1rem) * 0.3333);

        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    @media (min-width: 600px) and (max-width: 899px) {
        margin-right: 1.5rem;
        width: calc((100% - 1*1.5rem) * 0.5);

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media (max-width: 615px) {
        margin: 0  0 1.5rem 0;
        width: 100%;

       &:nth-child(2n) {
            margin-right: 0;
    }
    }
`

export const RobotTitle = styled.p`
    color: var(--text-title);
    font-weight: 700;
    margin-bottom: 0.25rem;
`

export const Status = styled.p`
    align-items: center;
    color: var(--text-subtitle);
    display: flex;
    font-size: 14px;
    position: absolute;
    right: 1.5rem;
    top: 1rem;

    span {
        color: var(--green);
        display: block;
        font-size: 32px;
        line-height: 8px;
        margin-right: 0.5rem;
    }
`

export const RobotId = styled.p`
    color: var(--text-body);
    font-size: 12px;
    margin-bottom: 0.25rem;
`

export const Tags = styled.div`
    display: flex;
    margin-bottom: 1rem;
`

export const TextTag = styled.p`
    border: 1px solid #E3E2E3;
    color: var(--text-body);
    font-size: 12px;
    margin-right: 4px;
    padding: 3px 6px;
`

export const RobotPaperInfos = styled.div`
    align-items: center;
    border: 1px solid #E3E2E3;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
`

export const PaperNumber = styled.p`
    color: #5F5D60;
    font-size: 2rem;
    font-weight: 700;
`

export const PaperName = styled.div`
    p {
        &:nth-child(1) {
            color: #959AA2;
            font-weight: 700;
        }

        &:nth-child(2) {
            color: #343234;
            font-size: 12px;
        }
    }

`

export const PaperValues = styled.div`

    p {
        &:nth-child(1) {
            color: var(--text-body);
            font-size: 12px;
        }

        &:nth-child(2) {
            align-items: center;
            color: var(--green);
            display: flex;
            font-size: 14px;
            line-height: 20px;
            
            img {
                margin-right: 2px;
            }
        }
    }


`

export const DailyBalance = styled.div`
    p {
        &:nth-child(1) {
            color: var(--text-subtitle);
            font-size: 12px;

            img {
                margin-left: 4px;
            }
        }

        &:nth-child(2) {
            color: var(--red);
            font-size: 20px;
            font-weight: 700;
            margin-top: 4px;
        }
    }
`

export const DailyTrades = styled.div`
    position: absolute;
    right: 1.5rem;
    bottom: 1rem;

    p {
        &:nth-child(1) {
            color: var(--text-subtitle);
            font-size: 12px;
            line-height: 20px;
        }

        &:nth-child(2) {
            color: #5F5D60;
            font-size: 20px;
            font-weight: 700;
            text-align: end;
        }
    }
`
