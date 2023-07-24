import styled from 'styled-components'
import { ReactNode } from "react";
import { Inputs } from './Inputs';
import { IAdvantage } from '../interfaces/IAdvantage';

interface Props {
    children?: ReactNode;
    onDelete?: (id: number) => void;
    onChange?: (id: number, value: string) => void;
    advantage?: IAdvantage
}

const StyledFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 17px;
`

const StyledDeleteButton = styled.div<Props>`
    cursor: pointer;
    background-image: url(delete.svg);
    width: 20px;
    height: 19px;
`

export const Advantage = (props: Props) => {
    return (
        <Inputs advantage>
            <StyledFlex>
                <input type="text" placeholder='Placeholder' value={props.advantage?.value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange && props.advantage?.id && props.onChange(props.advantage?.id, event.target.value)}
                />
                <StyledDeleteButton onClick={() => props.onDelete && props.advantage?.id && props.onDelete(props.advantage?.id)} />
            </StyledFlex>
        </Inputs>
    )
};
