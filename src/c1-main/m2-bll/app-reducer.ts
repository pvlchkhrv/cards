const initialState: InitialStateType = {
    status: 'idle',
    isError: null,
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, isError: action.isError}
        case 'APP/SET-INITIALIZED':
            return {...state, initialized: action.value}
        default:
            return {...state}
    }
}

export const setAppError = (isError: RequestErrorType) => ({type: 'APP/SET-ERROR', isError} as const);
export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const);
export const setInitializedSuccess = (value: boolean) => ({type: 'APP/SET-INITIALIZED', value} as const);

// types
export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>
export type SetAppInitializedActionType = ReturnType<typeof setInitializedSuccess>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetAppInitializedActionType

export type RequestStatusType = 'idle' | 'loading' | 'succeed' | 'failed';
export type RequestErrorType = string | null

export type InitialStateType = {
    status: RequestStatusType
    isError: RequestErrorType
    initialized: boolean
}
