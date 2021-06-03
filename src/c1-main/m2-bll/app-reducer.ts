const initialState: InitialStateType = {
    status: 'idle',
    isError: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, isError: action.isError}
        default:
            return {...state}
    }
}

export const setAppError = (isError: boolean) => ({ type: 'APP/SET-ERROR', isError } as const)
export const setAppStatus = (status:  RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>

// types
type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType

export type RequestStatusType =  'idle' | 'loading' | 'succeed' | 'failed'

export type InitialStateType = {
    status: RequestStatusType
    isError: boolean
}
