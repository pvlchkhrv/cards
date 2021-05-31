import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials: true,
})

export const authAPI = {
    registration(email: string, password: string) {
        return instance.post(`auth/register`, {email, password})
    },

}