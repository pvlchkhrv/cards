import axios from "axios";

export const inctance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0,',
    withCredentials: true
})

export type LoginParametersType = {
    email: string
    password: string
    rememberMe?: boolean
}

export const authAPI = {
    getAuth() {
      return inctance.post('auth/me')
    },
    login(parameters: LoginParametersType) {
        return inctance.post('auth/login', parameters)
    },
    logout() {
        return inctance.delete('auth/login')
    }
}
