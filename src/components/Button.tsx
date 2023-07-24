import styled from 'styled-components'
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    blue?: boolean;
    submit?: boolean;
    disabled?: boolean;
    add?: boolean;
    onClick?: () => void;
}

const StyledButton = styled.button<Props>`
    color: ${props => props.blue && '#FFFFFF' || '#5558FA'};
    font-weight: 400;
    font-size: 14px;
    background: ${props => props.blue && '#5558FA' || '#FFFFFF'};
    border-radius: 4px;
    height: 44px;
    width: ${props => props.add && '44px'}; 
    padding: ${props => props.add && '0' || '0 16px'}; 
    border: ${props => props.blue && 'none' || '1.5px solid #5558FA'};
    cursor: pointer;

    &:disabled {  
        opacity: 0.5;
        cursor: default;
    }
`
export const Button = (props: Props) => (
    <StyledButton onClick={props.onClick} type={props.submit && 'submit' || 'button'} disabled={props.disabled} {...props} />
);
