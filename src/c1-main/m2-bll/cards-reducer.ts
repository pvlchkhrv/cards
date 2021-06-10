import {cardsAPI} from "../m3-dal/cardsAPI";
import {setAppStatus} from "./app-reducer";

const SET_CARDS = "CARDS/SET_DATA"
const SET_QUESTION = "CARDS/SET_QUESTION"
const SET_PAGE_COUNT = "CARDS/SET_PAGE_COUNT"
// export type CardType = {
//     answer: string,
//     question:  string,
//     cardsPack_id:  string,
//     grade: number,
//     rating: number,
//     shots: number,
//     type:  string,
//     user_id: string,
//     created: string,
//     updated:  string,
//     __v: number,
//     _id:  string
// }
// export type CardsType = {
//     cards:Array<CardType>,
//     cardsTotalCount: number,
//     maxGrade: number,
//     minGrade: number,
//     page: number,
//     pageCount: number,
//     packUserid: string,
//     searchValue:string
// }
const initialState = {
    cards: [
        {
            answer: "no answer",
            question: "no question",
            cardsPack_id: "",
            grade: 5,
            rating: 0,
            shots: 1,
            type: "card",
            user_id: "",
            created: "",
            updated: "",
            __v: 0,
            _id: ""
        }
    ],
    cardsTotalCount: 4,
    maxGrade: 5.2,
    minGrade: 2,
    page: 1,
    pageCount: 4,
    packUserid: "",
    searchValue: ""
};
export const cardsReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_CARDS:
            return {...action.data};
        case SET_PAGE_COUNT:
            return {...state, pageCount: action.pageCount};
        case SET_QUESTION:
            return {
                ...state, searchValue: action.question
            }
        default:
            return state;
    }
};
export type AuthInitialStateType = typeof initialState;

export const setIsCards = (data: AuthInitialStateType) => ({type: "CARDS/SET_DATA", data: data} as const)
export type setIsCardsACType = ReturnType<typeof setIsCards>

export const setPageCount = (pageCount: number) => ({type: "CARDS/SET_PAGE_COUNT", pageCount} as const)
export type setPageCountACType = ReturnType<typeof setPageCount>

export const setQuestion = (question: string) => ({type: "CARDS/SET_QUESTION", question} as const)
export type setQuestionACType = ReturnType<typeof setQuestion>

type ActionsType = setIsCardsACType | setPageCountACType | setQuestionACType;

export const aboutMeThunk = () => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.authMe();
        dispatch(setAppStatus('succeed'));
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppStatus('failed'));
    }
}
export const getCardsThunk = (cardQuestion: string, packId: string, sortCards: string, page: number, pageCount: number) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.getCards(cardQuestion, packId, sortCards, page, pageCount);
        dispatch(setIsCards(response.data))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        console.log(error)
        dispatch(setAppStatus('failed'));
    }
}

export const deleteCardThunk = (cardQuestion: string, packId: string, sortCards: string, page: number, pageCount: number, cardId: string) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.deleteCard(cardId);
        dispatch(getCardsThunk(cardQuestion, packId, sortCards, page, pageCount))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        dispatch(setAppStatus('failed'));
        console.log(error)
    }
}

export const createCardThunk = (cardQuestion: string, packId: string, sortCards: string, page: number, pageCount: number) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.createCard(packId);
        dispatch(getCardsThunk(cardQuestion, packId, sortCards, page, pageCount))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        console.log(error)
        dispatch(setAppStatus('failed'));
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export const updateCardThunk = (cardQuestion: string, packId: string, sortCards: string, page: number, pageCount: number, cardId: string) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.updateCard(cardId);
        dispatch(getCardsThunk(cardQuestion, packId, sortCards, page, pageCount))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        dispatch(setAppStatus('failed'));
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export default cardsReducer

