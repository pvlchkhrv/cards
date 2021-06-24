import {setAppError, setAppIsAuth, setAppStatus} from "../../../c1-main/m2-bll/app-reducer";
import {authAPI} from '../authAPI';
import {AppThunkType} from '../../../c1-main/m2-bll/store';
import {setProfileData} from '../a3-profile/profile-reducer';

const SET_IS_LOGGED = 'AUTH/SET-IS-LOGGED';
const SET_USER_ID = 'AUTH/SET-USER-ID';
const SET_TOKEN = 'AUTH/SET-TOKEN';

const LoginInitialState = {
    isLogged: false,
    userInfo: {
        name: '',
        email: ''
    },
    userId: '',
    token: ''
};

export const loginReducer = (state: LoginInitialStateType = LoginInitialState, action: LoginActionsType): LoginInitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED:
            return {...state, isLogged: action.isLogged}
        case SET_USER_ID:
            return {...state, userId: action.userId}
        case SET_TOKEN:
            return {...state, token: action.token}
        default:
            return state
    }
};

// ACs
export const setIsLogged = (isLogged: boolean) => ({type: SET_IS_LOGGED, isLogged}) as const;
export const setUserId = (userId: string) => ({type: SET_USER_ID, userId}) as const;
export const setToken = (token: string) => ({type: SET_TOKEN, token}) as const;

// Thunks
export const logIn = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
    dispatch(setAppStatus('loading'))
    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log(res.data)
            dispatch(setAppIsAuth(true))
            dispatch(setProfileData(res.data))
            dispatch(setIsLogged(true))
            dispatch(setAppStatus('succeed'))
        })
        .catch(e => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
            dispatch(setAppStatus('failed'))
        })
}
export const logOut = (): AppThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.logout()
        .then(res => {
                dispatch(setIsLogged(false))
                dispatch(setAppStatus('succeed'))
            }
        )
        .catch(e => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
            dispatch(setAppStatus('failed'))
        })
}
export const authMe = (): AppThunkType => dispatch => {
    dispatch(setAppStatus('loading'))
    authAPI.authMe()
        .then(res => {
            console.log(res)
            dispatch(setAppIsAuth(true))
            dispatch(setProfileData(res.data))
            dispatch(setAppStatus('succeed'))
        })
        .catch(e => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
            dispatch(setAppStatus('failed'))
        })
}

//types
export type LoginInitialStateType = typeof LoginInitialState

export type LoginActionsType =
    | ReturnType<typeof setIsLogged>
    | ReturnType<typeof setUserId>
    | ReturnType<typeof setToken>
