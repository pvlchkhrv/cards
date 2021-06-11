import {authAPI, LoginParametersType} from "../m3-dal/LoginAPI";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'

type InitialStateType = {
    user: UserDataType | {},
    isAuth: boolean
}

type UserDataType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean
    error?: string
}

const initialState = {
    user: {
    },
    isAuth: false
};

type ActionsType =
    | ReturnType<typeof setAuthUserDataAC>

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                user: action.payload,
                isAuth: true            //isAuth: must not be
            };
        }
        default:
            return state;
    }
};

// ACs
export const setAuthUserDataAC = (payload: InitialStateType) => ({type: SET_USER_DATA, payload}) as const;

// Thunks
export const getAuthUserData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            console.log(res.data)
            dispatch(setAuthUserDataAC(res.data))
        })
        .catch((e) => {
        const error = e.response ? e.response.data.error:(e.message+', more details in the console')
            console.log(error)
    })
}



