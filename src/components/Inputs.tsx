import styled from 'styled-components'
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    inputWidth?: number;
    advantage?: boolean;
}

const StyledInputs = styled.div<Props>`
    margin-bottom: 48px;
    margin-bottom: ${props => props.advantage && '8px' || '48px'};

    label {
        display: block;
        color: #333333;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 8px;
        margin-top: 24px;  
    }

    textarea {
        resize: vertical;
        width: 100%;
        height: 84px;    
        padding: 12px;
        color: #333333;
        border-radius: 4px;
        border: 1px solid #d6d6d6;
    }

    input, select {
        width: 300px;     
        height: 44px; 
        padding: 12px;
        color: #333333;
        border: 1px solid #d6d6d6;
        border-radius: 4px;
        
        &::placeholder {
            color: rgba(0, 0, 0, 0.48);
        }
    }

    p {
        color:  rgba(0, 0, 0, 0.48);
        font-size: 12px;
        font-weight: 400;
        margin-top: 10px;
        height: 16px;
    }

    @media screen and (max-width: ${props => props.theme.width.mobile}) {
        input, select {
        width: 100%
        }
    }

    @media screen and (min-width: ${props => props.theme.width.desktop}) {
        input, select {
        width: ${props => props.inputWidth + 'px' || '300px'}
        }
    }
`
export const Inputs = (props: Props) => (
    <StyledInputs {...props} />
);
