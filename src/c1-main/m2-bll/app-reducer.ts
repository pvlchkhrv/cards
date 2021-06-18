const SET_STATUS = 'APP/SET-STATUS';
const SET_ERROR_MESSAGE = 'APP/SET-ERROR-MESSAGE';
const SET_SUCCESS_MESSAGE = 'APP/SET-SUCCESS-MESSAGE';
const SET_IS_AUTH = 'APP/SET-IS-AUTH';

const AppInitialState: AppInitialStateType = {
    status: 'idle',
    errorMessage: '',
    successMessage:'',
    isAuth: false
}

export const appReducer = (state: AppInitialStateType = AppInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.errorMessage}
        case SET_SUCCESS_MESSAGE:
            return {...state, successMessage: action.successMessage}
        case SET_IS_AUTH:
            return { ...state, isAuth: action.isAuth}
        default:
            return {...state}
    }
}

export const setAppError = (errorMessage: string) => ({type: SET_ERROR_MESSAGE, errorMessage} as const);
export const setAppSuccess = (successMessage: string) => ({type: SET_SUCCESS_MESSAGE, successMessage} as const);
export const setAppStatus = (status: RequestStatusType) => ({type: SET_STATUS, status} as const);
export const setAppIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth} as const);

// types
export type SetAppErrorActionType = ReturnType<typeof setAppError>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>;

export type AppActionsType =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppSuccess>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppIsAuth>

export type RequestStatusType = 'idle' | 'loading' | 'succeed' | 'failed'
export type AppInitialStateType = {
    status: RequestStatusType
    errorMessage: string
    successMessage: string
    isAuth: boolean
}
