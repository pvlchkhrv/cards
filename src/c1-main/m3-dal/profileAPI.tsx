import {instance} from "../m3-dall/instance";
import {ChangeDataProfile, ProfileDataType} from "../m2-bll/profile-reducer";

export const profileAPI = {
    authProfileData() {
        return instance.post<ProfileDataType>(`auth/me`, {})
    },
    changeAvatarProfile(avatar?: string) {
        return instance.put<ChangeDataProfile>(`auth/me`, {avatar})
    },
    changeNameProfile(name: string) {
        return instance.put<ChangeDataProfile>(`auth/me`, {name})
    },
};
