import {Dispatch} from 'redux';
import {setAppError, setAppStatus} from './app-reducer';
import {
    packsAPI,
    PacksPostDataType,
    PacksQueryParamsType,
    PacksResponseDataType,
    PackType
} from '../m3-dal/cardsPackAPI';

const SET_PACKS = 'PACKS/SET-PACKS';
const DELETE_PACK = 'PACKS/DELETE-PACK';
const UPDATE_PACK_TITLE = 'PACKS/UPDATE-TITLE';
const SET_NEW_PACK = 'PACKS/SET-NEW-PACK';

const initialState = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,
    pageCount: 0
}

export const packsReducer = (state: PacksResponseDataType = initialState, action: ActionsType): PacksResponseDataType => {
    switch (action.type) {
        case SET_PACKS:
            return {...state, cardPacks: [...action.cardPacks]};
        case DELETE_PACK:
            return {
                ...state,
                cardPacks: state.cardPacks.filter(p => p._id !== action.id)
            };
        case UPDATE_PACK_TITLE:
            return {
                ...state,
                cardPacks: state.cardPacks.map(p => {
                    if (p._id === action.id) {
                        p.name = action.title
                    }
                    return p;
                })
            };
        default:
            return state;
    }
};

//ACs
export const setPacks = (cardPacks: PackType []) => ({type: SET_PACKS, cardPacks} as const);
export const deletePack = (id: string) => ({type: DELETE_PACK, id} as const);
export const updatePackTitle = (id: string, title: string) => ({type: UPDATE_PACK_TITLE, id, title} as const);

//Thunks
export const authMe = () => () => {
}
export const getPacks = (params: PacksQueryParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'));
    packsAPI.getPacks(params)
        .then(res => {
            dispatch(setPacks(res.data.cardPacks));
            dispatch(setAppStatus('succeed'));
            dispatch(setAppError(false));
        })
        .catch((error) => {
            dispatch(setAppStatus('failed'));
            dispatch(setAppError(true));
        })
}

// export const createPack = (data: PacksPostDataType) => (dispatch: Dispatch<ActionsType>) => {
//     dispatch(setAppStatus('loading'));
//     packsAPI.addPack(data)
//         .then(res => {
//             dispatch(getPacks({}));
//             dispatch(setAppStatus('succeed'));
//             dispatch(setAppError(false));
//         })
//         .catch((error) => {
//             dispatch(setAppStatus('failed'));
//             dispatch(setAppError(true));
//         })
// }

export const deletePackOnServer = (id: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatus('loading'));
    packsAPI.deletePack(id)
        .then(res => {
            dispatch(deletePack(id));
            dispatch(setAppStatus('succeed'));
            dispatch(setAppError(false));
        })
        .catch((error) => {
            dispatch(setAppStatus('failed'));
            dispatch(setAppError(true));
        })
}
// export const updatePackTitleOnServer = (id: string, title: string) => (dispatch: Dispatch<ActionsType>) => {
//     dispatch(setAppStatus('loading'));
//     packsAPI.deletePack(id)
//         .then(res => {
//             dispatch(deletePack(id));
//             dispatch(setAppStatus('succeed'));
//             dispatch(setAppError(false));
//         })
//         .catch((error) => {
//             dispatch(setAppStatus('failed'));
//             dispatch(setAppError(true));
//         })
// }

//Types
type ActionsType =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setPacks>
    | ReturnType<typeof deletePack>
    | ReturnType<typeof updatePackTitle>
