import axios from "axios";

export const inctance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
})

export type LoginParametersType = {
    email: string
    password: string
    rememberMe?: boolean
}

export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return inctance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return inctance.delete('auth/me', {})
    }
}
