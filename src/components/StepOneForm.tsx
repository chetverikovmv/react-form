import { ReactNode, useState } from "react";
import { Button } from './Button';
import { useForm } from 'react-hook-form'
import { UseActions } from '../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { Inputs } from './Inputs';
import styled from 'styled-components';
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    children?: ReactNode;
}

const StyledFlex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const StepOneForm = (props: Props) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "all"
    })

    const [sexValue, setSexValue] = useState<'man' | 'woman'>('man');
    const { nickname, name, surname, sex } = useTypedSelector(state => state.createForm.formData);
    const { setStep, setNickname, setName, setSurname, setSex } = UseActions();

    let navigate = useNavigate();

    const onSubmit = (data: any) => {
        setNickname(data.nickname);
        setName(data.name);
        setSurname(data.surname);
        setStep('2');
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'man' || event.target.value === 'woman') {
            setSexValue(event.target.value)
            setSex(event.target.value)
        }
    }

    const handleClick = () => {
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs {...props}>
                <label htmlFor="nickname">Nickname</label>
                <input id="nickname" type="text" placeholder='Placeholder' value={nickname}
                    {...register("nickname", {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
                            message: 'Только буквы и цифры, без спецсимволов'
                        },
                        maxLength: {
                            value: 30,
                            message: 'Макс. 30 символов'
                        },
                        onChange: (event) => {
                            setNickname(event.target.value)
                        }
                    })}
                />
                
                <p>{errors?.nickname?.message?.toString() || ""}</p>

                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder='Placeholder' value={name}
                    {...register("name", {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                            message: 'Только буквы, без цифр и спецсимволов'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Макс. 50 символов'
                        },
                        onChange: (event) => {
                            setName(event.target.value)
                        }
                    })}
                />
               
                <p>{errors?.name?.message?.toString() || ""}</p>

                <label htmlFor="surname">Surname</label>
                <input id="surname" type="text" placeholder='Placeholder' value={surname}
                    {...register("surname", {
                        required: "Поле обязательно",
                        pattern: {
                            value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                            message: 'Только буквы, без цифр и спецсимволов'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Макс. 50 символов'
                        },
                        onChange: (event) => {
                            setSurname(event.target.value)
                        }
                    })}
                />
                
                <p>{errors?.surname?.message?.toString() || ""}</p>

                <label htmlFor="sex">Sex</label>
                <select value={sex} onChange={handleChange} name="sex">
                    <option value='man'>man</option>
                    <option value='woman'>woman</option>
                </select>

            </Inputs>

            <StyledFlex>
                <Button onClick={handleClick}>Назад</Button>
                <Button submit blue disabled={!isValid}>Далее</Button>
            </StyledFlex>
        </form>
    )
};
