import axios from "axios";

export const inctance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const newPasswordAPI = {
    newPassword(password: string, resetPassword: string) {
        return inctance.post('auth/new-password', {password, resetPassword})
    }
}