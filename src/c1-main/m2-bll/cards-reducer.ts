import {cardsAPI} from "../m3-dal/cardsAPI";
import {setAppStatus} from "./app-reducer";

const SET_CARDS = "CARDS/SET_DATA"

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
    cardsTotalCount: 3,
    maxGrade: 5.2,
    minGrade: 2,
    page: 1,
    pageCount: 4,
    packUserid: ""
};
export const cardsReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...action.data
            };
        default:
            return state;
    }
};
export type AuthInitialStateType = typeof initialState;

export const setIsCards = (data: AuthInitialStateType) => ({type: "CARDS/SET_DATA", data: data} as const)
export type setIsCardsACType = ReturnType<typeof setIsCards>

type ActionsType = setIsCardsACType

export const aboutMeThunk = () => async (dispatch: any) => {
    // dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.authMe();
        // dispatch(setAppStatus('succeed'));
        console.log(response)
    } catch (error) {
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}
export const getCardsThunk = () => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.getCards();
        dispatch(setIsCards(response.data))
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export const deleteCardThunk = (cardId: string) => async (dispatch: any) => {
    dispatch(setAppStatus('loading'));
    try {
        let response = await cardsAPI.deleteCard(cardId);
        dispatch(getCardsThunk())
        dispatch(setAppStatus('succeed'));
        console.log(response.data)
    } catch (error) {
        dispatch(setAppStatus('failed'));
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export const createCardThunk = (packId: string) => async (dispatch: any) => {
    try {
        let response = await cardsAPI.createCard(packId);
        dispatch(getCardsThunk())
        console.log(response.data)
    } catch (error) {
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export const updateCardThunk = (cardId: string) => async (dispatch: any) => {
    try {
        let response = await cardsAPI.updateCard(cardId);
        dispatch(getCardsThunk())
        console.log(response.data)
    } catch (error) {
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }
}

export default cardsReducer

