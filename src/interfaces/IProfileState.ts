export interface IProfileState {
    phone: string
    email: string
}

export enum ProfileActionTypes {
    SET_PHONE = "SET_PHONE",
    SET_EMAIL = "SET_EMAIL",

}

interface ISetPhone {
    type: ProfileActionTypes.SET_PHONE
    payload: string
}

interface ISetEmail {
    type: ProfileActionTypes.SET_EMAIL
    payload: string
}

export type ProfileAction = ISetPhone | ISetEmail 