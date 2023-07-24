import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { createFormReducer } from './createFormReducer';


export const rootReducer = combineReducers({
    profile: profileReducer,
    createForm: createFormReducer,
})

export type RootState = ReturnType<typeof rootReducer>