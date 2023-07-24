import { IProfileState,  ProfileAction, ProfileActionTypes } from '../../interfaces/IProfileState';

const initialState: IProfileState = {
    phone: '',
    email: ''
};

export const profileReducer = (state = initialState, action: ProfileAction): IProfileState => {
    switch (action.type) {
        case ProfileActionTypes.SET_PHONE:
            return { ...state, phone: action.payload }
        case ProfileActionTypes.SET_EMAIL:
            return { ...state, email: action.payload }
        
        default:
            return state
    }
}
