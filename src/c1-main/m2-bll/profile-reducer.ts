import {profileAPI, ProfileDataType } from "../m3-dal/profileAPI";
import {Dispatch} from "redux";

export type ProfileActionType = ReturnType<typeof getProfileDataAC>
    | ReturnType<typeof setErrorProfile>

export type ProfileInitialStateType = typeof initialState

const initialState = {
    profileData: null as ProfileDataType | null,
    errorMessage: ''
};

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'GET-PROFILE-DATA':
            return {
                ...state,
                profileData: action.data
            }
        case 'SET-ERROR-MESSAGE':
            return {
                ...state,
                errorMessage: action.error
            }
        default:
            return state;
    }
};

export const getProfileDataAC = (data: any) => ({type: 'CARDS/PROFILE/GET-PROFILE-DATA', data} as const)
export const setErrorProfile = (error: string) => ({type: 'CARDS/PROFILE/SET-ERROR-MESSAGE', error} as const)

export const checkDataUserTC = () => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileData()
            .then(res => {
                dispatch(getProfileDataAC(res.data))
            })
            .catch((e) => {
                dispatch(setErrorProfile(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })
    }
}

export default profileReducer
