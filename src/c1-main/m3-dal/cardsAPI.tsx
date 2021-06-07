import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardsAPI = {
    getCards(packId = "60a508fe94de4b00046c1e2c") {
        return instance.get(`cards/card?cardsPack_id=${packId}`,)
    }
}
