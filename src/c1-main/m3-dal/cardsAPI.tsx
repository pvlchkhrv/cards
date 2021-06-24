import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const cardsAPI = {
    authMe() {
        return instance.post('/auth/me', {});
    },
    getCards(cardQuestion: string, packId: string, sortCards: string, page: number, pageCount: number) {
        return instance.get(`cards/card?cardQuestion=${cardQuestion}&cardsPack_id=${packId}&sortCards=${sortCards}&page=${page}&pageCount=${pageCount}`)
    },

    deleteCard(cardId: string) {
        return instance.delete(`cards/card?id=${cardId}`,)
    },
    createCard(packId:string,question:string) {
        return instance.post(`cards/card`, {card: {cardsPack_id: packId,question:question}})
    },
    updateCard(cardId: string,question:string,answer:string) {
        return instance.put(`cards/card`, {card: {_id: cardId,question,answer}})
    }
}
