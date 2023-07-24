import styled from 'styled-components'
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    active: boolean;
    setActive: () => void;
}

const StyledModal = styled.div<Props>`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${props => props.active && 'scale(1)' || 'scale(0)'};
`
const StyledModalContent = styled.div<Props>`
    padding: 32px;
    border-radius: 12px;
    background-color: white;
    width: 80%;
    padding: 32px;

    @media screen and (min-width: ${props => props.theme.width.desktop}) {
        width: 460px;
   }
`
export const Modal = (props: Props) => (
    <StyledModal {...props} >
        <StyledModalContent  {...props}>
            {props.children}
        </StyledModalContent>
    </StyledModal  >
);
