import { IAdvantage } from '../../interfaces/IAdvantage';
import { CreateFormAction, CreateFormActionTypes, ICreateFormState, IFormDataState } from '../../interfaces/ICreateFormState';
import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';
import { IProfileState } from '../../interfaces/IProfileState';

export const setStep = (step: '1' | '2' | "3") => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_STEP, payload: step })
    }
}

export const setNickname = (nickname: string) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_NICKNAME, payload: nickname })
    }
}

export const setName = (name: string) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_NAME, payload: name })
    }
}

export const setSurname = (surname: string) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_SURNAME, payload: surname })
    }
}

export const setSex = (sex: 'man' | 'woman') => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_SEX, payload: sex })
    }
}

export const setAdvantages = (advantages: IAdvantage[]) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_ADV, payload: advantages })
    }
}

export const setCheckboxes = (checkboxes: boolean[]) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_CHECKBOX, payload: checkboxes })
    }
}

export const setRadioValue = (radioValue: number) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_RADIO, payload: radioValue })
    }
}

export const setTextarea = (textarea: string) => {
    return (dispatch: Dispatch<CreateFormAction>) => {
        dispatch({ type: CreateFormActionTypes.SET_TEXTAREA, payload: textarea })
    }
}

export const fetchPostList = (formData: IFormDataState, profile: IProfileState) => {
    return async (dispatch: Dispatch<CreateFormAction>) => {
        try {
            dispatch({ type: CreateFormActionTypes.FETCH_FORM });

            const response = await axios.post('https://api.sbercloud.ru/content/v1/bootcamp/frontend',
                JSON.stringify(
                    {
                        formData: formData,
                        profile: profile
                    }
                ))

            dispatch({ type: CreateFormActionTypes.FETCH_FORM_POST });
        }
        catch (e: unknown) {
            const error = e as AxiosError
            dispatch({ type: CreateFormActionTypes.FETCH_FORM_ERROR, payload: error.message })
        }
    }
}


