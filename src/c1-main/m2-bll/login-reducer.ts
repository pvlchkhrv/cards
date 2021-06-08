import {authAPI} from "../m3-dal/LoginAPI";
import {Dispatch} from "redux";
import {setAppStatus} from "./app-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const LOGIN_BUTTON_DISABLE = 'LOGIN_BUTTON_DISABLE';

type UserDataType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean
    error?: string
}

type InitialStateType = typeof initialState;

const initialState = {
    user: null as UserDataType | null,
    errorMessage: '',
    loginButtonDisable: false
};

type ActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setErrorMessageAC>
    | ReturnType<typeof loginButtonDisableAC>

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.payload.user,
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            }
        case LOGIN_BUTTON_DISABLE:
            return {
                ...state,
                loginButtonDisable: action.disable,
            }
        default:
            return state;
    }
};

// ACs
export const setAuthUserDataAC = (payload: InitialStateType) => ({type: SET_USER_DATA, payload}) as const;
export const setErrorMessageAC = (payload: InitialStateType) => ({type: SET_ERROR_MESSAGE, payload}) as const;
export const loginButtonDisableAC = (disable: boolean) => ({type: LOGIN_BUTTON_DISABLE, disable}) as const;

// Thunks
export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    dispatch(loginButtonDisableAC(true))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(setAuthUserDataAC(res.data))
            dispatch(loginButtonDisableAC(false))
        })
        .catch((e) => {
            dispatch(setErrorMessageAC(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
            dispatch(loginButtonDisableAC(false))
        }).finally(() => {
        dispatch(setAppStatus('succeed'))
    })
}



