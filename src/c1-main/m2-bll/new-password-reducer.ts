import {Dispatch} from "redux";
import {setAppStatus} from "./app-reducer";
import {newPasswordAPI} from "../m3-dal/newPasswordAPI";

export type SetPasswordActionType = ReturnType<typeof setErrorMessagedAC> | ReturnType<typeof isSuccessfulAC>
export type SetPasswordInitialStateType = typeof initialState

const initialState = {
    error: '',
    isSuccessful: false
};

export const newPasswordReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'SET-ERROR-MESSAGE': {
            return {
                ...state,
                error: action.error
            };
        }
        case 'IS-SUCCESSFUL': {
            return {
                ...state,
                isSuccessful: action.isSuccessful
            };
        }
        default:
            return state;
    }
};

export const setErrorMessagedAC = (error: string) => ({type: 'SET-ERROR-MESSAGE', error} as const)
export const isSuccessfulAC = (isSuccessful: boolean) => ({type: 'IS-SUCCESSFUL', isSuccessful} as const)

export const setNewPasswordTC = (newPassword: string , resetPassword: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    return newPasswordAPI.newPassword(newPassword, resetPassword)
        .then(response => {
            dispatch(isSuccessfulAC(true))
            dispatch(setAppStatus('succeed'))
        }).catch(e => {
            dispatch(setErrorMessagedAC(e.response.data.error))
            dispatch(setAppStatus('failed'))
        })
}

export default newPasswordReducer;
