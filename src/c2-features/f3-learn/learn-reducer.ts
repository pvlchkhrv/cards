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

export const learnReducer = (state: LearnInitialStateType = LearnInitialState, action: any) => {
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
export {}
