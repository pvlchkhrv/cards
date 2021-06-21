import {Dispatch} from 'redux';
import {authAPI} from '../authAPI';
import {setAppError, setAppIsAuth, setAppStatus} from '../../../c1-main/m2-bll/app-reducer';

const SET_PROFILE_DATA = 'SET-PROFILE-DATA';
const NEW_PROFILE_NAME = 'NEW-PROFILE-NAME';
const NEW_PROFILE_AVATAR = 'NEW-PROFILE-AVATAR';

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

export type ProfileInitialStateType = typeof ProfileInitialState

const ProfileInitialState = {
    profile: {} as UserDataType,
}

export const profileReducer = (state: ProfileInitialStateType = ProfileInitialState, action: ProfileActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile:{...action.user}
            }
        case NEW_PROFILE_NAME:
            return {
                ...state,
                profile: {
                    ...state.profile, name: action.name
                }
            }
        case NEW_PROFILE_AVATAR:
            return {
                ...state,
                profile: {
                    ...state.profile, avatar: action.avatar
                }
            }
        default:
            return state;
    }
};

export const setProfileData = (user: UserDataType) => ({type: SET_PROFILE_DATA, user} as const)
export const setProfileName = (name: string) => ({type: NEW_PROFILE_NAME, name} as const)
export const setProfileAvatar = (avatar: string | undefined) => ({type: NEW_PROFILE_AVATAR, avatar} as const)

export const authMe = () => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    authAPI.authMe()
        .then(res => {
            dispatch(setAppIsAuth(true));
        })
        .catch((e) => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
            dispatch(setAppIsAuth(false))
        })
}

export const changeProfile = (name?: string, avatar?: undefined | string) => (dispatch: Dispatch) => {
    dispatch(setAppStatus('loading'))
    authAPI.updateProfile(name, avatar)
        .then(res => {
            dispatch(setProfileName(res.data.updatedUser.name))
            dispatch(setProfileAvatar(res.data.updatedUser.avatar))
            // dispatch(getAuthUserData)
        })
        .catch(e => {
            dispatch(setAppError(e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            ))
        })
}
// export const changeAvatarProfileTC = (avatar?: string) => {
//     return (dispatch: Dispatch) => {
//         dispatch(setAppStatus('loading'))
//         profileAPI.changeAvatarProfile(avatar)
//             .then(res => {
//                 dispatch(setNewAvatarProfileAC(res.data.updatedUser.avatar))
//             })
//             .catch((e) => {
//                 dispatch(setErrorProfileAC(e.response
//                     ? e.response.data.error
//                     : (e.message + ', more details in the console')
//                 ))
//             })
//             .finally(() => {
//                     dispatch(setAppStatus('succeed'))
//                 }
//             )
//     }
// }


export type ProfileActionsType =
    | ReturnType<typeof setProfileData>
    | ReturnType<typeof setProfileName>
    | ReturnType<typeof setProfileAvatar>

export default profileReducer;
