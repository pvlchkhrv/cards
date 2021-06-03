import {authAPI} from "../m3-dall/instance";

const IS_REGISTER = "AUTH/IS_REGISTER"
const IS_ERROR_MESSAGE = "AUTH/IS_ERROR_MESSAGE"

export const setIsRegister = (value: boolean) => ({type: "AUTH/IS_REGISTER", value} as const)

export type setIsRegisterACType = ReturnType<typeof setIsRegister>

export const setIsErrorMessage = (value: string) => ({type: "AUTH/IS_ERROR_MESSAGE", value} as const)

export type setIsErrorMessageACType = ReturnType<typeof setIsErrorMessage>

type ActionsType = setIsRegisterACType | setIsErrorMessageACType

export const registrationThunk = (email: string, password: string) => async (dispatch: any) => {
    try {
        let response = await authAPI.registration(email, password);
        dispatch(setIsRegister(true))
        console.log(response)
    } catch (error) {
        dispatch(setIsErrorMessage(error.response.data.error))
    } finally {
        dispatch(setIsRegister(false))
    }

}

const initialState = {
    isRegister: false,
    isErrorMessage: "",
};
export type AuthInitialStateType = typeof initialState;

export const registerReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case IS_REGISTER:
            return {...state, isRegister: action.value};
        case IS_ERROR_MESSAGE:
            return {...state, isErrorMessage: action.value};
        default:
            return state;
    }
};

export default registerReducer

