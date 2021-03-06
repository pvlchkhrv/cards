import {instance} from './instance';
import {UserDataType} from '../m2-bll/login-reducer';

const from = 'pvlchkhrv@gmail.com';
const message = `<div>password recover link: <a href='https://neko-back.herokuapp.com/2.0/set-new-password/$token$'>Link</a></div>`;

export const authAPI = {
    ping(){
        return instance.get(`/ping/?frontTime=${Date.now()}`);
    },
    authMe() {
        return instance.post<AuthMeResponseType>('auth/login', {});
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/me', {});
    },
    register(email: string, password: string) {
        return instance.post<RegisterResponseType>(`auth/register`, {email, password})
    },
    restorePassword(email: string) {
        return instance.post<ResponseType>('/auth/forgot', {email, from, message})
    },
    setNewPassword(password: string, resetPasswordToken: string) {
        return instance.post<ResponseType>('auth/new-password', {password, resetPasswordToken})
    },
    updateProfile(name: string, avatar?: string) {
        return instance.put<UpdateProfileResponseType>('auth/me', {name, avatar});
    }
}

//types
type ResponseType = {
    info: string
    error: string;
}
type AuthMeResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
};
type LoginResponseType = UserDataType;
type RegisterResponseType = {
    error?: string;
};
type UpdateProfileResponseType = {
    updatedUser: UserDataType
    error?: string
}
