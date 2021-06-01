import {restorePasswordAPI} from '../m3-dal/restoreAPI';
import {Dispatch} from 'redux';

const SET_SUCCESS_MESSAGE = 'AUTH/SET-SUCCESS-MESSAGE';
const SET_ERROR_MESSAGE = 'AUTH/SET-ERROR-MESSAGE';
const SET_IS_ERROR = 'AUTH/SET-IS-ERROR';
const SET_IS_REGISTERED = 'AUTH/SET-IS-REGISTERED';



const initialState = {
    isRegistered: false,
    isError: false,
    successMessage: '',
    errorMessage: '',
}

export const restorePasswordReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_IS_REGISTERED: return {...state, isRegistered: action.isRegistered};
        case SET_IS_ERROR: return {...state, isError: action.isError};
        case SET_ERROR_MESSAGE: return {...state, errorMessage: action.errorMessage};
        case SET_SUCCESS_MESSAGE: return {...state, successMessage: action.successMessage};

        default: return state;
    }
};

//ACs
export const setSuccessMessage = (successMessage: string) => ({type: SET_SUCCESS_MESSAGE, successMessage} as const);
export const setIsError = (isError: boolean) => ({type: SET_IS_ERROR, isError} as const);
export const setIsRegistered = (isRegistered: boolean) => ({type: SET_IS_REGISTERED, isRegistered} as const);
export const setErrorMessage = (errorMessage: string) => ({type: SET_ERROR_MESSAGE, errorMessage} as const);

//Thunks
export const restorePasswordTC = (email: string) => (dispatch: Dispatch<ActionsType>) => {
    restorePasswordAPI.restorePassword(email)
        .then(res => {
            dispatch(setIsRegistered(true));
            dispatch(setSuccessMessage(res.data.info));
            dispatch(setIsError(false));
            console.log(res.data.info);
        })
        .catch((error) => {
            dispatch(setIsError(true));
            dispatch(setErrorMessage(error.response.data.error));
            console.log(error.response.data.error);
            dispatch(setIsRegistered(false))
        })
}
export const pingServerTC = () => (dispatch: Dispatch<ActionsType>) => {
    restorePasswordAPI.ping()
        .then(res => {
            console.log(res.data);
        })
}

//Types
type ActionsType =
    | ReturnType<typeof setIsError>
    | ReturnType<typeof setIsRegistered>
    | ReturnType<typeof setSuccessMessage>
    | ReturnType<typeof setErrorMessage>

type initialStateType = typeof initialState;
