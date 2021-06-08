import {instance} from "../m3-dall/instance";

export type ProfileDataType = {
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

export const profileAPI = {
    getProfileData() {
        return instance.post<ProfileDataType>(`auth/me`, {})
    }
};