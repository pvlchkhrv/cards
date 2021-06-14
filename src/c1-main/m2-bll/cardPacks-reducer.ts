import {Dispatch} from 'redux';
import {setAppError, setAppStatus} from './app-reducer';
import {packsAPI, PacksParamsType} from '../m3-dal/cardsPackAPI';
import {ThunkAction} from 'redux-thunk';
import {AppRootStateType} from './store';

const SET_PACKS = 'PACKS/SET-PACKS';
const SET_USER_ID = 'PACKS/SET-USER-ID';
const SET_PAGE = 'PACKS/SET-PAGE';
const SET_PAGE_COUNT = 'PACKS/SET-PAGE-COUNT';
const SET_PACKS_TOTAL_COUNT = 'PACKS/SET-PACKS-TOTAL-COUNT';


export const PacksInitState: PacksStateType = {
    packsData: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 1,
        pageCount: 5
    },
    packUser_id: '',
};

export const packsReducer = (state: PacksStateType = PacksInitState, action: ActionsType): PacksStateType => {
    switch (action.type) {
        case SET_PACKS:
            return {
                ...state, packsData: {
                    ...state.packsData,
                    cardPacks: action.cardPacks,
                }
            };
        case SET_USER_ID:
            return {
                ...state,
                packUser_id: action.userId
            };
        case SET_PAGE:{
            return { ...state, packsData: {...state.packsData, page: action.page} };
        }

        case SET_PAGE_COUNT:
            return { ...state, packsData: {...state.packsData, page: action.pageCount} }
        case SET_PACKS_TOTAL_COUNT:
            return { ...state, packsData: {...state.packsData, cardPacksTotalCount: action.totalCount} }
        // case SET_MIN_MAX:
        //     return { ...state, packsData: {...state.packsData, minCardsCount: action.totalCount} }
        default:
            return state;
    }
};

//ACs
export const setPacks = (cardPacks: PackType []) => ({type: SET_PACKS, cardPacks} as const);
export const setUserId = (userId: string) => ({type: SET_USER_ID, userId} as const);
export const setPage = (page: number) => ({type: SET_PAGE, page} as const);
export const setPageCount = (pageCount: number) => ({type: SET_PAGE_COUNT, pageCount} as const);
export const setPacksTotalCount = (totalCount: number) => ({type: SET_PACKS_TOTAL_COUNT, totalCount} as const);

//Thunks
export const getPacks = () => async (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
    dispatch(setAppStatus('loading'));
    const packUser_id = getState().packs.packUser_id;
    const {page, pageCount, minCardsCount, maxCardsCount} = getState().packs.packsData
    try {
        const response = await packsAPI.getPacks({user_id: packUser_id, pageCount, page, min: minCardsCount, max: maxCardsCount});
        dispatch(setPacks(response.cardPacks));
        dispatch(setPacksTotalCount(response.cardPacksTotalCount));
        dispatch(setAppStatus('succeed'));
        console.log(response);
    } catch (e) {
        dispatch(setAppError(true));
        dispatch(setAppStatus('failed'));
    }
};

export const createPack = (title: string) => async (getState: () => AppRootStateType, dispatch: Dispatch<any>) => {
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
    | ReturnType<typeof setPage>
    | ReturnType<typeof setPageCount>
    | ReturnType<typeof setPacksTotalCount>

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
    packsData: {
        cardPacks: PackType [],
        cardPacksTotalCount: number,
        maxCardsCount: number,
        minCardsCount: number,
        page: number,
        pageCount: number
    },
    packUser_id: string,
}
