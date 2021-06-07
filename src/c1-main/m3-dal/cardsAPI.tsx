import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardsAPI = {
    getCards(packId = "60bca38e3a402900041d8b63") {
        return instance.get(`cards/card?cardsPack_id=${packId}`,)
    }
}
