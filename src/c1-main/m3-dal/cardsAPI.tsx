import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardsAPI = {
    authMe() {
        return instance.post('/auth/me', {});
    },
    getCards(packId = "5fe66bf32f93dc434098cdd7") {
        return instance.get(`cards/card?cardsPack_id=${packId}`,)
    },
    deleteCard(cardId: string) {
        return instance.delete(`cards/card?id=${cardId}`,)
    },
    createCard(packId = "5fe66bf32f93dc434098cdd7") {
        return instance.post(`cards/card`, {card: {cardsPack_id: packId}})
    },
    updateCard(cardId: string) {
        return instance.put(`cards/card`, {card:{_id: cardId}})
    }
}
