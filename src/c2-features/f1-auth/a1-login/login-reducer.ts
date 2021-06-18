import {Dispatch} from "redux";
import {setAppError, setAppIsAuth, setAppStatus, setAppSuccess} from "../../../c1-main/m2-bll/app-reducer";
import {authAPI} from '../authAPI';
import {setProfileData} from '../a3-profile/profile-reducer';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const LOGIN_BUTTON_DISABLE = 'LOGIN_BUTTON_DISABLE';
const LOGOUT = 'LOGOUT';

export type UserDataType = {
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

export type LoginInitialStateType = typeof LoginInitialState;

const LoginInitialState = {
    user: {} as UserDataType | null
};

export type LoginActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setErrorMessageAC>
    | ReturnType<typeof loginButtonDisableAC>
    | ReturnType<typeof logOutAC>

export const loginReducer = (state: LoginInitialStateType = LoginInitialState, action: LoginActionsType): LoginInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
};

// ACs
export const setAuthUserData = (user: UserDataType | null) => ({type: SET_USER_DATA, user}) as const;
export const setErrorMessageAC = (errorMessage: string | null) => ({type: SET_ERROR_MESSAGE, errorMessage}) as const;
export const loginButtonDisableAC = (disable: boolean) => ({type: LOGIN_BUTTON_DISABLE, disable}) as const;
export const logOutAC = (data: string | null) => ({type: LOGOUT, data}) as const;

// Thunks
export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            dispatch(setAuthUserData(res.data))
            setProfileData(res.data)
            dispatch(setAppStatus('succeed'))
            dispatch(setAppIsAuth(true))
        })
        .catch((e) => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
            dispatch(setAppStatus('failed'))
            dispatch(setAppIsAuth(false))
        })
}
export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
                dispatch(setAppSuccess(res.data))
                dispatch(setAuthUserData(null))
            }
        )
        .catch((e) => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
        })
}
