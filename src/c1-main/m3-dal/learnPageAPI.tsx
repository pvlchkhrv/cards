import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const learningAPI = {
    updateGrade(grade: number, card_id: string) {
        return instance.put<UpdatedGradeResponseType>('cards/grade', {grade, card_id})
    }
}

type UpdatedGradeResponseType = {
    updatedGrade: {
        _id: string
        cardsPack_id: string
        card_id: string
        user_id: string
        grade: number
        shots: number
    }
}