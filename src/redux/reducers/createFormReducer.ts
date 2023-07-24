import { IFormDataState } from './../../interfaces/ICreateFormState';
import { ICreateFormState, CreateFormAction, CreateFormActionTypes } from '../../interfaces/ICreateFormState';
import { IAdvantage } from '../../interfaces/IAdvantage';

const initialAdvantages: IAdvantage[] = [
    {
        id: 1,
        value: ''
    },
    {
        id: 2,
        value: ''
    },
    {
        id: 3,
        value: ''
    }
]

const initialCheckboxes = [false, false, false]

const initialFormData: IFormDataState = {
    step: '1',
    nickname: '',
    name: '',
    surname: '',
    sex: 'man',
    advantages: initialAdvantages,
    checkboxes: initialCheckboxes,
    radioValue: 1,
    textarea: ''
};

const initialState: ICreateFormState = {
    formData: initialFormData,
    loading: false,
    error: null
};

export const createFormReducer = (state = initialState, action: CreateFormAction): ICreateFormState => {

    switch (action.type) {
        case CreateFormActionTypes.SET_STEP:
            return { ...state, formData: { ...state.formData, step: action.payload } }

        case CreateFormActionTypes.SET_NICKNAME:
            return { ...state, formData: { ...state.formData, nickname: action.payload } }

        case CreateFormActionTypes.SET_NAME:
            return { ...state, formData: { ...state.formData, name: action.payload } }

        case CreateFormActionTypes.SET_SURNAME:
            return { ...state, formData: { ...state.formData, surname: action.payload } }

        case CreateFormActionTypes.SET_SEX:
            return { ...state, formData: { ...state.formData, sex: action.payload } }

        case CreateFormActionTypes.SET_ADV:
            return { ...state, formData: { ...state.formData, advantages: action.payload } }

        case CreateFormActionTypes.SET_CHECKBOX:
            return { ...state, formData: { ...state.formData, checkboxes: action.payload } }

        case CreateFormActionTypes.SET_RADIO:
            return { ...state, formData: { ...state.formData, radioValue: action.payload } }

        case CreateFormActionTypes.SET_TEXTAREA:
            return { ...state, formData: { ...state.formData, textarea: action.payload } }

        case CreateFormActionTypes.FETCH_FORM:
            return { loading: true, error: null, formData: { ...state.formData } }

        case CreateFormActionTypes.FETCH_FORM_ERROR:
            return { loading: false, error: action.payload, formData: { ...state.formData } }
            
        case CreateFormActionTypes.FETCH_FORM_POST:
            return { loading: false, error: null, formData: { ...state.formData } }

        default:
            return state
    }
}
