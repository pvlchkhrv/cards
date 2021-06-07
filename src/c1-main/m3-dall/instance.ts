import axios from "axios";

export const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
})
// https://neko-back.herokuapp.com/2.0
    // http://localhost:7542/2.0/
export const authAPI = {
    registration(email: string, password: string) {
        return instance.post(`auth/register`, {email, password},)
    },

}