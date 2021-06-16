import {profileAPI} from "../m3-dal/profileAPI";
import {Dispatch} from "redux";
import {setAuthUserDataAC} from "./login-reducer";
import {setAppIsAuth, setAppStatus} from "./app-reducer";
import {authAPI} from '../m3-dal/authAPI';

const PROFILE_DATA = 'PROFILE_DATA';
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const NEW_NAME_PROFILE = 'NEW_NAME_PROFILE';
const NEW_AVATAR_PROFILE = 'NEW_AVATAR_PROFILE';

export type ProfileDataType = {
    created: Date
    avatar?: string
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
export type ChangeDataProfile = {
    updatedUser: ProfileDataType
    error?: string
}

export type ProfileInitialStateType = typeof ProfileInitialState

const ProfileInitialState = {
    profileData: {} as ProfileDataType,      //null as ProfileDataType | null
    errorMessage: null as string | null
}

export type ProfileActionsType = ReturnType<typeof setProfileDataAC>
    | ReturnType<typeof setErrorProfileAC>
    | ReturnType<typeof setNewNameProfileAC>
    | ReturnType<typeof setNewAvatarProfileAC>

export const profileReducer = (state: ProfileInitialStateType = ProfileInitialState, action: ProfileActionsType) => {
    switch (action.type) {
        case PROFILE_DATA:
            return {
                ...state,
                profileData: action.data
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.error
            }
        case NEW_NAME_PROFILE:
            return {
                ...state,
                profileData: {
                    ...state.profileData, name: action.name
                }
            }
        case NEW_AVATAR_PROFILE:
            return {
                ...state,
                profileData: {
                    ...state.profileData, avatar: action.avatar
                }
            }
        default:
            return state;
    }
};

export const setProfileDataAC = (data: ProfileDataType) => ({type: PROFILE_DATA, data} as const)
export const setErrorProfileAC = (error: string) => ({type: ERROR_MESSAGE, error} as const)
export const setNewNameProfileAC = (name: string) => ({type: NEW_NAME_PROFILE, name} as const)
export const setNewAvatarProfileAC = (avatar?: any) => ({type: NEW_AVATAR_PROFILE, avatar} as const)

export const authTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe()
            .then(res => {
                dispatch(setAuthUserDataAC(res.data))
                dispatch(setAppIsAuth(true))
            })
            .catch((e) => {
                dispatch(setErrorProfileAC(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
                dispatch(setAppIsAuth(false))
            })
    }
}

export const changeNameProfileTC = (name: string) => {
    return (dispatch: any) => {
        dispatch(setAppStatus('loading'))
        profileAPI.changeNameProfile(name)
            .then(res => {
                dispatch(setNewNameProfileAC(res.data.updatedUser.name))
                // dispatch(getAuthUserData)
            })
            .catch((e) => {
                dispatch(setErrorProfileAC(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })
            .finally(() => {
                    dispatch(setAppStatus('succeed'))
                }
            )
    }
}
export const changeAvatarProfileTC = (avatar?: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setAppStatus('loading'))
        profileAPI.changeAvatarProfile(avatar)
            .then(res => {
                dispatch(setNewAvatarProfileAC(res.data.updatedUser.avatar))
            })
            .catch((e) => {
                dispatch(setErrorProfileAC(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })
            .finally(() => {
                    dispatch(setAppStatus('succeed'))
                }
            )
    }
}

export default profileReducer;
