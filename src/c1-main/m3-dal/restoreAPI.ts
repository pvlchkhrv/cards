import axios from 'axios';

export interface IForgotData {
    email: string
    from: string
    message: string
}

const from = 'pvlchkhrv@gmail.com';
const message = `<div>password recover link: <a href='https://neko-back.herokuapp.com/2.0/set-new-password/$token$'>Link</a></div>`;

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
});

export const restorePasswordAPI = {
    restorePassword(email: string) {
        return instance.post('/auth/forgot', {email, from, message})
    },
    ping(){
        return instance.get(`/ping/?frontTime=${Date.now()}`);
    }
};
