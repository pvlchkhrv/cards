import {learningAPI} from "../m3-dal/learnPageAPI";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {getCardsThunk} from "./cards-reducer";

const SET_ANSWER_CORRECT = 'SET_ANSWER_CORRECT';
const SET_DISPLAY_ANSWER = 'SET_DISPLAY_ANSWER';
const SET_CARD_TO_LEARN = 'SET_CARD_TO_LEARN';

export type LearnInitialStateType = typeof LearnInitialState;

const LearnInitialState = {
    card_id: '',
    question: '',
    answer: '',
    questionImg: '',
    answerImg: '',
    answerCorrect: undefined,
    displayAnswer: undefined
}

export type LearnActionsType =
    | ReturnType<typeof setAnswerCorrect>
    | ReturnType<typeof setDisplayAnswer>
    | ReturnType<typeof setCardToLearn>

export const learnReducer = (state: LearnInitialStateType = LearnInitialState, action: LearnActionsType) => {
    switch (action.type) {
        case SET_ANSWER_CORRECT:
            return {
                ...state,
                answerCorrect: action.answerCorrect
            }
        case SET_DISPLAY_ANSWER:
            return {
                ...state,
                displayAnswer: action.displayAnswer
            }
        case SET_CARD_TO_LEARN:
            return {
                ...state,
                card_id: action.card_id,
                question: action.question,
                answer: action.answer,
                questionImg: action.questionImg,
                answerImg: action.answerImg
            }
        default:
            return state;
    }
}

// ACs
export const setAnswerCorrect = (answerCorrect: boolean | undefined) => ({type: SET_ANSWER_CORRECT, answerCorrect}) as const;
export const setDisplayAnswer = (displayAnswer: boolean | undefined) => ({type: SET_DISPLAY_ANSWER, displayAnswer}) as const;
export const setCardToLearn = (card_id: string,
                               question: string,
                               answer: string,
                               questionImg?: string,
                               answerImg?: string
) => ({type: SET_CARD_TO_LEARN, card_id, question, answer, questionImg, answerImg}) as const;

// Thunk
export const updateGradeTC = (card_id: string, grade: number): AppRootStateType => async (dispatch: Dispatch) => {
    const response = await learningAPI.updateGrade(grade, card_id)
    // console.log(response.data)
    const cardPack_id = response.data.updatedGrade.cardsPack_id
    dispatch(getCardsThunk(cardPack_id))
}