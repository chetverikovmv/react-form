import { ReactNode, useState } from "react";
import { Button } from './Button';
import { useForm } from 'react-hook-form'
import { UseActions } from '../hooks/useActions';
import { Inputs } from './Inputs';
import styled from 'styled-components';
import { Advantage } from "./Advantage";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAdvantages } from "../hooks/useAdvantages";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";

interface Props {
    children?: ReactNode;
}

const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StepTwoForm = (props: Props) => {
    const {
        register,
        formState: { isValid },
        handleSubmit,
    } = useForm({
        mode: "all"
    })

    const { advantages, checkboxes, radioValue } = useTypedSelector(state => state.createForm.formData);
    const { setStep, setNickname, setName, setSurname, setSex, setCheckboxes, setRadioValue } = UseActions();
    const { addAdvantage, changeAdvantageTitle, deleteAdvantage } = useAdvantages();

    const onSubmit = () => setStep('3');
    const handleClick = () => setStep('1');
    const handleClickDelete = (id: number) => {
        deleteAdvantage(id);
    }
    const handleChange = (id: number, value: string) => {
        changeAdvantageTitle(id, value)
    }
    const handleClickAdd = () => {
        let maxAdvantageId = advantages.length > 0 ?
            advantages.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id
            : 1;
        addAdvantage({
            id: maxAdvantageId + 1,
            value: ''
        });
    }

    const [checkedOne, setCheckedOne] = useState(checkboxes[0]);
    const handleChangeCheckboxOne = () => {
        setCheckedOne(!checkedOne);
        const checkboxesCopy = [...checkboxes];
        checkboxesCopy[0] = !checkedOne
        setCheckboxes(checkboxesCopy)
    };
    const [checkedTwo, setCheckedTwo] = useState(checkboxes[1]);
    const handleChangeCheckboxTwo = () => {
        setCheckedTwo(!checkedTwo);
        const checkboxesCopy = [...checkboxes];
        checkboxesCopy[1] = !checkedTwo
        setCheckboxes(checkboxesCopy)
    };
    const [checkedThree, setCheckedThree] = useState(checkboxes[2]);
    const handleChangeCheckboxThree = () => {
        setCheckedThree(!checkedThree);
        const checkboxesCopy = [...checkboxes];
        checkboxesCopy[2] = !checkedThree
        setCheckboxes(checkboxesCopy)
    };

    const [radio, setRadio] = useState(radioValue);
    const handleChangeRadio = (number: number) => {
        setRadio(number);
        setRadioValue(number);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs {...props}>

                <label>Advantages</label>

                {advantages.map(adv => <Advantage key={adv.id} advantage={adv} onDelete={handleClickDelete} onChange={handleChange} />)}
                <Button add onClick={handleClickAdd}>
                    <img src="plus.svg" alt="add" />
                </Button>

                <label>Checkbox group</label>
                <Checkbox name="checkbox" label="1" isChecked={checkedOne} onChange={handleChangeCheckboxOne} />
                <Checkbox name="checkbox" label="2" isChecked={checkedTwo} onChange={handleChangeCheckboxTwo} />
                <Checkbox name="checkbox" label="3" isChecked={checkedThree} onChange={handleChangeCheckboxThree} />

                <label>Radio group</label>
                <Radio name="checkbox" label="1" isChecked={radio === 1 ? true : false} onChange={() => handleChangeRadio(1)} />
                <Radio name="checkbox" label="2" isChecked={radio === 2 ? true : false} onChange={() => handleChangeRadio(2)} />
                <Radio name="checkbox" label="3" isChecked={radio === 3 ? true : false} onChange={() => handleChangeRadio(3)} />

            </Inputs>

            <StyledFlex>
                <Button onClick={handleClick}>Назад</Button>
                <Button submit blue disabled={!isValid}>Далее</Button>
            </StyledFlex>
        </form>
    )
};
