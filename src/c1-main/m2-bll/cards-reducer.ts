import {cardsAPI} from "../m3-dal/cardsAPI";
import {setAppStatus} from "./app-reducer";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

const SET_CARDS = "CARDS/SET_DATA"
const SET_QUESTION = "CARDS/SET_QUESTION"
const SET_PAGE_COUNT = "CARDS/SET_PAGE_COUNT"
const SET_SORT_TYPE = "CARDS/SET_SORT_TYPE"
const SET_NUMBER_PAGE = "CARDS/SET_NUMBER_PAGE"
export type CardsResponseType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type CardType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    shots: number,
    type: string,
    user_id: string,
    created: string,
    updated: string,
    __v: number,
    _id: string
}
export type CardsStateType = {
    cardsData: {
        cards: Array<CardType>,
        cardsTotalCount: number,
        maxGrade: number,
        minGrade: number,
        page: number,
        pageCount: number,
        packUserId: string
    }
    searchValue: string,
    sort: string
}
const initialState = {
    cardsData: {
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
        cardsTotalCount: 10,
        maxGrade: 5.2,
        minGrade: 2,
        page: 1,
        pageCount: 5,
        packUserId: ""
    },
    searchValue: "",
    sort: ""
};
export const cardsReducer = (state: CardsStateType = initialState, action: ActionsType): CardsStateType => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,cardsData :action.data
            };
        case SET_PAGE_COUNT:
            return {...state, cardsData: {...state.cardsData, pageCount: action.pageCount}};
        case SET_QUESTION:
            return {
                ...state, searchValue: action.question
            };
        case SET_SORT_TYPE:
            return {
                ...state, sort: action.sortType
            };
        case SET_NUMBER_PAGE:
            return {
                ...state, cardsData: {
                    ...state.cardsData, page: action.page
                }
            };
        default:
            return state;
    }
};
export type AuthInitialStateType = typeof initialState;

export const setIsCards = (data:CardsResponseType) => ({type: "CARDS/SET_DATA", data: data} as const)
export type setIsCardsACType = ReturnType<typeof setIsCards>

export const setPageCount = (pageCount: number) => ({type: "CARDS/SET_PAGE_COUNT", pageCount} as const)
export type setPageCountACType = ReturnType<typeof setPageCount>

export const setQuestion = (question: string) => ({type: "CARDS/SET_QUESTION", question} as const)
export type setQuestionACType = ReturnType<typeof setQuestion>

export const setSortType = (sortType: string) => ({type: "CARDS/SET_SORT_TYPE", sortType} as const)
export type setSortACType = ReturnType<typeof setSortType>
export const setNumberPage = (page: number) => ({type: "CARDS/SET_NUMBER_PAGE", page} as const)
export type setNumberPageACType = ReturnType<typeof setNumberPage>

type ActionsType = setIsCardsACType | setPageCountACType | setQuestionACType | setSortACType | setNumberPageACType;

export const aboutMeThunk = () => async (dispatch: any) => {
    await cardsAPI.authMe();
}

export const getCardsThunk = (packId: string) => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const {page, pageCount} = getState().cards.cardsData
    const {searchValue, sort} = getState().cards
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.getCards(searchValue, packId, sort, page, pageCount);
        dispatch(setIsCards(response.data))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        console.log(error)
        dispatch(setAppStatus('failed'));
    }
}

export const deleteCardThunk = (cardId: string, packId: string) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.deleteCard(cardId);
        dispatch(setAppStatus('succeed'));
        dispatch(getCardsThunk(packId))
        console.log(response.data)
    } catch (error) {
        dispatch(setAppStatus('failed'));
        console.log(error)
    }
}

export const createCardThunk = (packId: string,question:string) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.createCard(packId,question);
        dispatch(getCardsThunk(packId))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        console.log(error)
        dispatch(setAppStatus('failed'));
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export const updateCardThunk = (cardId: string, packId: string,question:string,answer:string) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.updateCard(cardId,question,answer);
        dispatch(getCardsThunk(packId))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        dispatch(setAppStatus('failed'));
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export default cardsReducer

