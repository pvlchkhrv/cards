import {Dispatch} from 'redux';
import {authAPI} from '../authAPI';
import {setAppError, setAppIsAuth, setAppStatus} from '../../../c1-main/m2-bll/app-reducer';

const SET_PROFILE_DATA = 'SET-PROFILE-DATA';
const NEW_PROFILE_NAME = 'NEW-PROFILE-NAME';
// const NEW_PROFILE_AVATAR = 'NEW-PROFILE-AVATAR';
const SET_TOKEN = 'SET-TOKEN';

export type UserDataType = {
    avatar?: string
    created: Date
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: Date
    verified: boolean
    __v: number
    _id: string
}

export type ProfileInitialStateType = {
    profile: UserDataType
}

export const ProfileInitialState = {
    profile: {
        avatar: '',
        created: new Date(),
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        tokenDeathTime: 0,
        updated: new Date(),
        verified: false,
        __v: 0,
        _id: ''
    }
}

export const profileReducer = (state: ProfileInitialStateType = ProfileInitialState, action: ProfileActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: {...action.user}
            }
        case NEW_PROFILE_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile, name: action.name
                }
            }
        case SET_TOKEN:
            return {
                ...state,
                profile: {...state.profile, token: action.token}
            }
        default:
            return state;
    }
};

export const setProfileData = (user: UserDataType) => ({type: SET_PROFILE_DATA, user} as const)
export const setProfileName = (name: string) => ({type: NEW_PROFILE_NAME, name} as const)
export const setToken = (token: string) => ({type: SET_TOKEN, token} as const)

export const changeProfile = (name?: string, avatar?: undefined | string) => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    authAPI.updateProfile(name, avatar)
        .then(res => {
            dispatch(setProfileName(res.data.updatedUser.name))
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

export type ProfileActionsType =
    | ReturnType<typeof setProfileData>
    | ReturnType<typeof setProfileName>
    | ReturnType<typeof setToken>

export default profileReducer;
