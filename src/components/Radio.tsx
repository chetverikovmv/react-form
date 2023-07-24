import styled from 'styled-components'
import { ReactNode } from "react";

interface IRadio{
    name: string
    label: string
    isChecked: boolean
    onChange: () => void
}

interface Props {
    children?: ReactNode;

}

const StyledRadio= styled.div<Props>`
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

export const Radio = ({ name, label, isChecked, onChange }: IRadio) => {
    return (
      <StyledRadio>
        <input type="radio" name={name} value={label} checked={isChecked} onChange={onChange} />
        <label>{label}</label>
      </StyledRadio>
    );
  };
