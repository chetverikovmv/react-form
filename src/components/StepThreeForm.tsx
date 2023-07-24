import { ReactNode, useState } from "react";
import { Button } from './Button';
import { useForm } from 'react-hook-form'
import { UseActions } from '../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { Inputs } from './Inputs';
import styled from 'styled-components';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Modal } from "./Modal";

interface Props {
    children?: ReactNode;
    onClick?: () => void
}

const StyledFlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledLoader = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledFlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledFlexCenter = styled.div`
    display: flex;
    justify-content: center;
`

const StyledHeader = styled.h2`
    font-size: 20px;
    font-weight: 600;
`
const StyledCloseButton = styled.div<Props>`
    min-width: 28px;
    height: 28px;
    background: #f5f5f5;
    border-radius: 50px;
    cursor: pointer;

    background-image: url(close.svg);
    background-position: center;
    background-repeat: no-repeat;
`

const StyledCircleError = styled.div`
    min-width: 80px;
    height: 80px;
    background: #fce4e6;
    border-radius: 50px;

    background-image: url(circle-cancel-filled.svg);
    background-position: center;
    background-repeat: no-repeat;
`
const StyledCircleSuccsess = styled.div`
    min-width: 80px;
    height: 80px;
    background: #daf3ea;
    border-radius: 50px;

    background-image: url(circle-success-filled.svg);
    background-position: center;
    background-repeat: no-repeat;
`

const StyledIconWrapper = styled.div`
    margin: 24px 0;
    padding: 26px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StepThreeForm = (props: Props) => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "all"
    })

    const { advantages, checkboxes, radioValue, textarea, step, nickname, name, surname, sex } = useTypedSelector(state => state.createForm.formData);
    const { error, loading } = useTypedSelector(state => state.createForm);
    const { phone, email } = useTypedSelector(state => state.profile);
    const { setStep, setNickname, setName, setSurname, setSex, setCheckboxes, setRadioValue, setTextarea, fetchPostList } = UseActions();
    const [modalActive, setModalActive] = useState<boolean>(false);

    let navigate = useNavigate();

    const onSubmit = (data: any) => {
        fetchPostList({
            step: step,
            nickname: nickname,
            name: name,
            surname: surname,
            sex: sex,
            advantages: advantages,
            checkboxes: checkboxes,
            radioValue: radioValue,
            textarea: textarea
        },
            {
                phone: phone,
                email: email
            }
        );

        setModalActive(true);
    }

    const handleButtonClick = () => setStep('2');
    const handleButtonModalErrorClick = () => setModalActive(false);
    const handleButtonModalSuccsessClick = () => navigate('/');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs {...props}>

                <label>About</label>
                <textarea id="about" placeholder="Placeholder" value={textarea}
                    {...register("about", {
                        required: "Поле обязательно",
                        maxLength: {
                            value: 200,
                            message: 'Макс. 200 символов'
                        },
                        onChange: (event) => {
                            setTextarea(event.target.value)
                        }
                    })}
                />
                <p>{errors?.surname?.message?.toString() || ""}</p>

            </Inputs>

            <StyledFlexBetween>
                <Button onClick={handleButtonClick}>Назад</Button>
                <Button submit blue disabled={!isValid}>Отправить</Button>
            </StyledFlexBetween>

            {loading && <StyledLoader>
                <img src="loading-icon.gif" />
            </StyledLoader>}

            {!loading && <Modal active={modalActive} setActive={() => setModalActive}>
                {error ?
                    <>
                        <StyledFlexBetween>
                            <StyledHeader>Ошибка</StyledHeader>
                            <StyledCloseButton onClick={() => handleButtonModalErrorClick()} />
                        </StyledFlexBetween>
                        <StyledIconWrapper>
                            <StyledCircleError />
                        </StyledIconWrapper>
                        <StyledFlexEnd>
                            <Button blue onClick={() => handleButtonModalErrorClick()}>Закрыть</Button>
                        </StyledFlexEnd>
                    </>
                    :
                    <>
                        <StyledHeader>Форма успешно отправлена</StyledHeader>
                        <StyledIconWrapper>
                            <StyledCircleSuccsess />
                        </StyledIconWrapper>
                        <StyledFlexCenter>
                            <Button blue onClick={() => handleButtonModalSuccsessClick()}>На главную</Button>
                        </StyledFlexCenter>
                    </>
                }
            </Modal>}
        </form>
    )
};
