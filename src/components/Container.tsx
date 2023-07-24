import styled from 'styled-components'
import { forwardRef, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    main?: boolean;
}
export type Ref = HTMLDivElement;

const StyledContainer = styled.div<Props>`
   width: 100%;
   background: #FFFFFF;
   padding: 24px; 
 
   @media screen and (min-width: ${props => props.theme.width.desktop}) {
    margin: 24px auto;
    border-radius: ${props => props.main && '12px 12px 0px 0px' || '24px'};
    min-height: ${props => props.main && '704px' || '0'};
    width: 900px;
    padding: ${props => props.main && '24px' || '62px 110px 80px'}; 
   }
`
export const Container = forwardRef<Ref, Props>((props, ref) => (

    <StyledContainer ref={ref} {...props} />

));



