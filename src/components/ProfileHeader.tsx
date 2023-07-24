import styled from 'styled-components'
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

const StyledFlex = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding-bottom: 24px;
`
const StyledAvatar = styled.div`
    min-width: 40px;
    height: 40px;
    background: #D5E4F7;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #212830;
        text-transform: uppercase;
    }

    @media screen and (min-width: ${props => props.theme.width.mobile}) {
        min-width: 80px;
        height: 80px;
        border-radius: 100px;
        p {
        font-size: 40px;
        }
   }
`
const StyledUserName = styled.p`
    color: #333333;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;
`
const StyledFlexLinks = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: ${props => props.theme.width.mobile}) {
      display: flex;
    }
`
const StyledProfileLink = styled.a`
    color: #5558FA;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    margin-right: 17px; 

    &::before {
        content: "";
        width: 14px;
        height: 12px;

        background: url(folder-icon.svg) no-repeat;
        float: left;
        margin: 0 6px 0 0;
    }

    &:hover {
        text-decoration: underline;
    }
`
export const ProfileHeader = (props: Props) => (
    <StyledFlex>
        <StyledAvatar>
            <p>аи</p>
        </StyledAvatar>
        <div>
            <StyledUserName>Иван Иванов</StyledUserName>
            <StyledFlexLinks>
                <StyledProfileLink href='#'>Telegram</StyledProfileLink>
                <StyledProfileLink href='#'>GitHub</StyledProfileLink>
                <StyledProfileLink href='#'>Resume</StyledProfileLink>
            </StyledFlexLinks>
        </div>
    </StyledFlex>
);


