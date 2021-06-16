const SET_STATUS = 'APP/SET-STATUS';
const SET_ERROR = 'APP/SET-ERROR';
const SET_IS_AUTH = 'APP/SET-IS-AUTH';

const initialState: InitialStateType = {
    status: 'idle',
    error: '',
    isAuth: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_IS_AUTH:
            return { ...state, isAuth: action.isAuth}
        default:
            return {...state}
    }
}

export const setAppError = (error: string) => ({type: SET_ERROR, error} as const);
export const setAppStatus = (status: RequestStatusType) => ({type: SET_STATUS, status} as const);
export const setAppIsAuth = (isAuth: boolean) => ({type: SET_IS_AUTH, isAuth} as const);

// types
export type SetAppErrorActionType = ReturnType<typeof setAppError>;
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>;

type AppActionsType =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAppIsAuth>

export type RequestStatusType = 'idle' | 'loading' | 'succeed' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string
    isAuth: boolean
}
