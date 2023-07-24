import { ProfileAction, ProfileActionTypes } from '../../interfaces/IProfileState';
import { Dispatch } from 'redux';

export const setPhone = (phone: string) => {
    return (dispatch: Dispatch<ProfileAction>) => {
        dispatch({ type: ProfileActionTypes.SET_PHONE, payload: phone })
    }
}

export const setEmail = (email: string) => {
    return (dispatch: Dispatch<ProfileAction>) => {
        dispatch({ type: ProfileActionTypes.SET_EMAIL, payload: email })
    }
}
