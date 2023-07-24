import { IAdvantage } from "./IAdvantage"

export interface IFormDataState {
    step: '1' | '2' | '3' 
    nickname: string
    name: string
    surname: string
    sex: 'man' | 'woman'
    advantages: IAdvantage[]
    checkboxes: boolean[]
    radioValue: number    
    textarea: string
}

export interface ICreateFormState {
    formData: IFormDataState
    loading: boolean
    error: null | string
}

export enum CreateFormActionTypes {
    SET_STEP = "SET_STEP",
    SET_NICKNAME = "SET_NICKNAME",
    SET_NAME = "SET_NAME",
    SET_SURNAME = "SET_SURNAME",
    SET_SEX = "SET_SEX",
    SET_ADV = "SET_ADV",
    SET_CHECKBOX = "SET_CHECKBOX",
    SET_RADIO = "SET_RADIO",
    SET_TEXTAREA = "SET_TEXTAREA",

    FETCH_FORM = "FETCH_FORM",
    FETCH_FORM_SUCCESS = "FETCH_FORM_SUCCESS",
    FETCH_FORM_ERROR = "FETCH_FORM_ERROR",
    FETCH_FORM_POST = "FETCH_FORM_POST",
}

interface ISetStep {
    type: CreateFormActionTypes.SET_STEP
    payload: '1' | '2' | '3' 
}

interface ISetNickname {
    type: CreateFormActionTypes.SET_NICKNAME
    payload: string
}

interface ISetName {
    type: CreateFormActionTypes.SET_NAME
    payload: string
}

interface ISetSurname {
    type: CreateFormActionTypes.SET_SURNAME
    payload: string
}

interface ISetSex {
    type: CreateFormActionTypes.SET_SEX
    payload: 'man' | 'woman'
}

interface ISetAdvantages {
    type: CreateFormActionTypes.SET_ADV
    payload: IAdvantage[]
}

interface ISetCheckbox {
    type: CreateFormActionTypes.SET_CHECKBOX
    payload: boolean[]    
}

interface ISetRadio {
    type: CreateFormActionTypes.SET_RADIO
    payload: number 
}

interface ISetTextarea {
    type: CreateFormActionTypes.SET_TEXTAREA
    payload: string 
}

interface IFetchFormAction {
    type: CreateFormActionTypes.FETCH_FORM
}
interface IFetchFormSuccessAction {
    type: CreateFormActionTypes.FETCH_FORM_SUCCESS
    payload: ICreateFormState
}
interface IFetchFormErrorAction {
    type: CreateFormActionTypes.FETCH_FORM_ERROR
    payload: string
}

interface IFetchFormPostAction {
    type: CreateFormActionTypes.FETCH_FORM_POST
}

export type CreateFormAction = ISetStep | ISetNickname | ISetName | ISetSurname | ISetSex | ISetAdvantages | ISetCheckbox | ISetRadio | ISetTextarea |IFetchFormAction | IFetchFormSuccessAction | IFetchFormErrorAction | IFetchFormPostAction