import axios from 'axios';

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

export type PacksResponseDataType = {
    cardPacks: PackType []
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
};
export type PacksPostDataType = {
    cardPacks: {
        name: string
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?:false
        type?: string
    }
};

export type PacksQueryParamsType = {
    packName?: string
    pageCount?: number
    min?: number
    max?: number
    page?: number
};

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
});

export const packsAPI = {
    authMe() {
        return instance.post('/auth/me', {});
    },
    getPacks(packsQueryParams: PacksQueryParamsType) {
        return instance.get<PacksResponseDataType>('/cards/pack', {params: packsQueryParams});
    },
    addPack(data: PacksPostDataType) {
        return instance.post('cards/pack', {...data})
    },
    deletePack(id: string) {
        return instance.delete(`cards/pack?id=${id}`);
    },
    async updatePack(id: string, title: string) {
        return await instance.put('cards/pack', {cardsPack: {_id: id, name: title}});
    },
    ping() {
        return instance.get(`/ping/?frontTime=${Date.now()}`);
    }
};
