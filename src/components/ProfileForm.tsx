import { ReactNode } from "react";
import { Button } from './Button';
import { useForm } from 'react-hook-form'
import { IMaskInput } from "react-imask";
import { UseActions } from '../hooks/useActions';
import { useNavigate } from 'react-router-dom';
import { Inputs } from './Inputs';
import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    children?: ReactNode;
    inputWidth?: number;
}

export const ProfileForm = (props: Props) => {
    const {
        register,
        formState: { isValid },
        handleSubmit,
    } = useForm({
        mode: "all"
    })

    const { setStep, setPhone, setEmail } = UseActions();
    const { email, phone } = useTypedSelector(state => state.profile);

    let navigate = useNavigate();

    const onSubmit = () => {
        setStep('1');
        navigate('create');
    }

    const PhoneMask = "+{7} 000 000-00-00";

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs {...props}>
                <label htmlFor="phone">Номер телефона</label>
                <IMaskInput
                    id="phone"
                    mask={PhoneMask}
                    placeholder='+7 999 999-99-99'
                    onAccept={(value: string) => {
                        setPhone(value)
                    }}
                    value={phone}
                />

                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder='tim.jennings@example.com' value={email}
                    {...register("email", {
                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        required: "Поле обязательно",
                        onChange: (event) => {
                            setEmail(event.target.value)
                        }
                    })}
                />
            </Inputs>
            <Button blue submit disabled={!(phone.length === 16) || !isValid}>Начать</Button>
        </form>
    )
};
