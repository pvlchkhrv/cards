import {setAppError, setAppStatus} from '../../../../c1-main/m2-bll/app-reducer';
import {packsAPI, UpdatePackPayloadType} from '../p3-dal/cardsPackAPI';
import {AppRootStateType, AppThunkType} from '../../../../c1-main/m2-bll/store';
import {authAPI} from '../../../f1-auth/authAPI';

const SET_PACKS = 'PACKS/SET-PACKS';
const SET_PAGE = 'PACKS/SET-PAGE';
const SET_PAGE_COUNT = 'PACKS/SET-PAGE-COUNT';
const SET_PACKS_TOTAL_COUNT = 'PACKS/SET-PACKS-TOTAL-COUNT';


export const PacksInitState: PacksInitStateType = {
    packsData: {
        cardPacks: [],
        cardPacksTotalCount: 0,
        maxCardsCount: 0,
        minCardsCount: 0,
        page: 1,
        pageCount: 5
    },
};

export const packsReducer = (state: PacksInitStateType = PacksInitState, action: PacksActionsType): PacksInitStateType => {
    switch (action.type) {
        case SET_PACKS:
            return {
                ...state, packsData: {
                    ...state.packsData,
                    cardPacks: action.cardPacks,
                }
            };
        case SET_PAGE: {
            return {...state, packsData: {...state.packsData, page: action.page}}
        }
        case SET_PAGE_COUNT:
            return {...state, packsData: {...state.packsData, page: action.pageCount}}
        case SET_PACKS_TOTAL_COUNT:
            return {...state, packsData: {...state.packsData, cardPacksTotalCount: action.totalCount}}
        // case SET_MIN_MAX:
        //     return { ...state, packsData: {...state.packsData, minCardsCount: action.totalCount} }
        default:
            return state;
    }
};

//ACs
export const setPacks = (cardPacks: PackType []) => ({type: SET_PACKS, cardPacks} as const);
export const setPage = (page: number) => ({type: SET_PAGE, page} as const);
export const setPageCount = (pageCount: number) => ({type: SET_PAGE_COUNT, pageCount} as const);
export const setPacksTotalCount = (totalCount: number) => ({type: SET_PACKS_TOTAL_COUNT, totalCount} as const);

//Thunks
export const getStartPacks = (): AppThunkType => async dispatch => {
    dispatch(setAppStatus('loading'))
    try {
        await authAPI.authMe()
        const response = await packsAPI.getPacks({})
        dispatch(setPacks(response.cardPacks))
        dispatch(setPacksTotalCount(response.cardPacksTotalCount));
        dispatch(setAppStatus('succeed'));
    } catch (e) {
        dispatch(setAppError(e.message));
        dispatch(setAppStatus('failed'));
    }
}


export const getPacks = (userId?: string): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppStatus('loading'));
    const {maxCardsCount, minCardsCount, page, pageCount} = getState().packs.packsData
    try {
        const response = await packsAPI.getPacks({
            max: maxCardsCount,
            min: minCardsCount,
            page: page,
            pageCount: pageCount,
            user_id: userId
        });
        dispatch(setPacks(response.cardPacks))
        dispatch(setPacksTotalCount(response.cardPacksTotalCount));
        console.log(response)
        dispatch(setAppStatus('succeed'));
    } catch (e) {
        dispatch(setAppError(e.message));
        dispatch(setAppStatus('failed'));
    }
};

export const createPack = (title: string): AppThunkType => async (dispatch, getState: () => AppRootStateType) => {
    dispatch(setAppStatus('loading'));
    const userId = getState().login.userId;
    try {
        await packsAPI.createPack({name: title});
        dispatch(getPacks(userId));
        dispatch(setAppStatus('succeed'));
    } catch (e) {
        dispatch(setAppError(e.message));
        dispatch(setAppStatus('failed'));
    }
};

export const deletePack = (id: string): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus('loading'));
    try {
        await packsAPI.deletePack(id);
        dispatch(getPacks());
        dispatch(setAppStatus('succeed'));
    } catch (e) {
        dispatch(setAppError(e.message));
        dispatch(setAppStatus('failed'));
    }
}

export const updatePack = (updatePackPayload: UpdatePackPayloadType): AppThunkType => async (dispatch) => {
    dispatch(setAppStatus('loading'));
    try {
        await packsAPI.updatePack(updatePackPayload);
        dispatch(getPacks());
        dispatch(setAppStatus('succeed'));
        // console.log(response);
    } catch (e) {
        dispatch(setAppError(e.message));
        dispatch(setAppStatus('failed'));
    }
}

//Types
export type PacksActionsType =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setPacks>
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
export type PacksInitStateType = {
    packsData: {
        cardPacks: PackType [],
        cardPacksTotalCount: number,
        maxCardsCount: number,
        minCardsCount: number,
        page: number,
        pageCount: number
    }
}
