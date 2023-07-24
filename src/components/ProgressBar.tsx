import styled from 'styled-components'
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    active?: boolean;
    done?: boolean;
    step?: '1' | '2' | '3';
}

const StyledFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledScale = styled.div`    
    width: 100%;
    height: 8px;
    background: #f5f5f5;
    margin-bottom: 105px;
`
const StyledCurrentLine = styled.div<Props>`
    width: 100%;
    height: 8px;
    background: ${props => props.step === '1' && 'none' || props.step === '2' && 'linear-gradient(to right, #5558FA 50%, transparent 50%)' || props.step === '3' && '#5558FA'};    
`
const StyledDot = styled.div<Props>`
    background: ${props => props.active && '#ffffff' || props.done && '#5558FA' || '#a6a6a6'};
    background-image: ${props => props.done && 'url(check-small.svg)' || 'none'};
    border: ${props => props.active && '6px solid #5558FA' || 'none'};
    border-radius: 50%;
    margin-top: -4px;
    width: 16px;
    height: 16px;
`
const StyledNumber = styled.p<Props>`
    color: ${props => props.active && '#5558FA' || '#666666'};
    font-size: 14px;
    font-weight: 600;
    text-align: center;
`
const StyledBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;   

    &:first-child {
       margin-left: -1px; 
    }
    &:last-child {
       margin-right: -1px; 
    }
`
export const ProgressBar = (props: Props) => (
    <StyledScale>
        <StyledCurrentLine step={props.step}>
            <StyledFlex>
                <StyledBlock>
                    <StyledDot active={props.step === '1'} done={props.step === '2' || props.step === '3'} />
                    <StyledNumber active>1</StyledNumber>
                </StyledBlock>
                <StyledBlock>
                    <StyledDot active={props.step === '2'} done={props.step === '3'} />
                    <StyledNumber active={props.step === '2' || props.step === '3'}>2</StyledNumber>
                </StyledBlock>
                <StyledBlock>
                    <StyledDot active={props.step === '3'} />
                    <StyledNumber active={props.step === '3'}>3</StyledNumber>
                </StyledBlock>
            </StyledFlex>
        </StyledCurrentLine>
    </StyledScale>
);
