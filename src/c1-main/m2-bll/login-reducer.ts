import {authAPI} from "../m3-dal/LoginAPI";
import {Dispatch} from "redux";
import {setAppStatus} from "./app-reducer";
import {setErrorProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const LOGIN_BUTTON_DISABLE = 'LOGIN_BUTTON_DISABLE';
const LOGOUT = 'LOGOUT';

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
    errorMessage: null as string | null,
    loginButtonDisable: false,
    logOutInfo: null as string | null
};

type ActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setErrorMessageAC>
    | ReturnType<typeof loginButtonDisableAC>
    | ReturnType<typeof logOutAC>

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.user,
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage,
            }
        case LOGIN_BUTTON_DISABLE:
            return {
                ...state,
                loginButtonDisable: action.disable,
            }
        case LOGOUT:
            return {
                ...state,
                logOutInfo: action.data
            }
        default:
            return state;
    }
};

// ACs
export const setAuthUserDataAC = (user: UserDataType | null) => ({type: SET_USER_DATA, user}) as const;
export const setErrorMessageAC = (errorMessage: string | null) => ({type: SET_ERROR_MESSAGE, errorMessage}) as const;
export const loginButtonDisableAC = (disable: boolean) => ({type: LOGIN_BUTTON_DISABLE, disable}) as const;
export const logOutAC = (data: string | null) => ({type: LOGOUT, data}) as const;

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

export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            dispatch(logOutAC(res.data))
            dispatch(setAuthUserDataAC(null))
            }
        )
        .catch((e) => {
            dispatch(setErrorProfile(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
        })
}



