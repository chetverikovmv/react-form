import styled from 'styled-components'
import { ReactNode } from "react";

interface ICheckbox {
    name: string
    label: string
    isChecked: boolean
    onChange: () => void
}

interface Props {
    children?: ReactNode;
}

const StyledCheckbox = styled.div<Props>`
    display: flex;
    color: #333333;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 4px;

    label {
        padding-left: 12px;
        margin: 0;
    }


    input, select {
        width: 16px;     
        height: 16px; 
        color: #333333;
        
        &::placeholder {
            color: rgba(0, 0, 0, 0.48);
        }
    }
`
export const Checkbox = ({ name, label, isChecked, onChange }: ICheckbox) => {
    return (
        <StyledCheckbox>
            <input name={name} type="checkbox" value={label} checked={isChecked} onChange={onChange} />

            <label>{label}</label>
        </StyledCheckbox>
    );
};
