import {setAppError, setAppIsAuth, setAppStatus} from "../../../c1-main/m2-bll/app-reducer";
import {authAPI} from '../authAPI';
import {setProfileData} from '../a3-profile/profile-reducer';
import {ThunkAction} from 'redux-thunk';
import {AppRootActionsType, AppRootStateType} from '../../../c1-main/m2-bll/store';

const SET_IS_LOGGED = 'AUTH/SET-IS-LOGGED';

type ThunkType = ThunkAction<void, AppRootStateType, unknown, AppRootActionsType>

export type LoginInitialStateType = typeof LoginInitialState;

const LoginInitialState = {
    isLogged: false
};

export type LoginActionsType =
    | ReturnType<typeof setIsLogged>

export const loginReducer = (state: LoginInitialStateType = LoginInitialState, action: LoginActionsType): LoginInitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED:
            return {
                ...state,
                isLogged: action.isLogged,
            }
        default:
            return state;
    }
};

// ACs

export const setIsLogged = (isLogged: boolean) => ({type: SET_IS_LOGGED, isLogged}) as const;

// Thunks
export const logIn = (email: string, password: string, rememberMe: boolean): ThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log(res.data)
            setIsLogged(true)
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
        })
}
export const logOut = (): ThunkType => dispatch => {
    authAPI.logout()
        .then(res => {
                dispatch(setIsLogged(false));
                console.log(res.data)
                dispatch(setAppStatus('succeed'))
            }
        )
        .catch((e) => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
        })
}
