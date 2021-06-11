import {Dispatch} from 'redux';
import {setAppError, setAppStatus} from './app-reducer';
import {packsAPI} from '../m3-dal/cardsPackAPI';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from './store';

const SET_PACKS = 'PACKS/SET-PACKS';
const SET_USER_ID = 'PACKS/SET-USER-ID';

export const PacksInitState: PacksStateType = {
    cardPacks: [],
    packUser_id: '',
};

export const packsReducer = (state: PacksStateType = PacksInitState, action: ActionsType): PacksStateType => {
    switch (action.type) {
        case SET_PACKS:
            return {...state, cardPacks: [...action.cardPacks]};
        case SET_USER_ID:
            return {...state, packUser_id: action.userId};
        default:
            return state;
    }
};

//ACs
export const setPacks = (cardPacks: PackType []) => ({type: SET_PACKS, cardPacks} as const);
export const setUserId = (userId: string) => ({type: SET_USER_ID, userId} as const);

//Thunks
export const getPacks = () => async (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    debugger
    dispatch(setAppStatus('loading'));
    const packUser_id = getState().packs.packUser_id;
    try {
        const response = await packsAPI.getPacks(packUser_id);
        dispatch(setPacks(response.cardPacks));
        dispatch(setAppStatus('succeed'));
        console.log(response);
    } catch (e) {
        dispatch(setAppError(true));
        dispatch(setAppStatus('failed'));
    }
};

export const createPack = (title: string) => async (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus('loading'));
    try {
        const response = await packsAPI.addPack(title);
        dispatch(getPacks());
        dispatch(setAppStatus('succeed'));
        console.log(response);
    } catch (e) {
        dispatch(setAppError(true));
        dispatch(setAppStatus('failed'));
    }
};

export const deletePackOnServer = (id: string): ThunkAction<void, AppRootStateType, unknown, any> => (dispatch) => {
    dispatch(setAppStatus('loading'));
    try {
        const response = packsAPI.deletePack(id);
        dispatch(getPacks());
        dispatch(setAppStatus('succeed'));
        console.log(response);
    } catch (e) {
        dispatch(setAppError(true));
        dispatch(setAppStatus('failed'));
    }
}

export const updatePackTitleOnServer = (id: string, title: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatus('loading'));
    try {
        const response = packsAPI.updatePack(id, title);
        dispatch(getPacks());
        dispatch(setAppStatus('succeed'));
        console.log(response);
    } catch (e) {
        dispatch(setAppError(true));
        dispatch(setAppStatus('failed'));
    }
}

//Types
type ActionsType =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setPacks>
    | ReturnType<typeof setUserId>

export type PackType = {
    _id: string
    user_id: string
    name: string
    path: string // папка	,
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток			приватные колоды будут
    rating: number // лайки	только если указать свой
    type: string
    created: string
    updated: string
    __v: number
};
export type PacksStateType = {
    cardPacks: PackType[];
    packUser_id: string;
}
