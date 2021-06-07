import {cardsAPI} from "../m3-dal/cardsAPI";

const SET_CARDS = "CARDS/SET_DATA"


export const setIsCards = (data: AuthInitialStateType) => ({type: "CARDS/SET_DATA", data: data} as const)

export type setIsCardsACType = ReturnType<typeof setIsCards>

type ActionsType = setIsCardsACType

export const getCardsThunk = () => async (dispatch: any) => {
    try {
        let response = await cardsAPI.getCards();
        dispatch(setIsCards(response.data))
        console.log(response.data)
    } catch (error) {
        console.log(error)
        // dispatch(setIsErrorMessage(error.response.data.error))
    }

}

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
export type AuthInitialStateType = typeof initialState;

export const cardsReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state = action.data
            };
        default:
            return state;
    }
};

export default cardsReducer

