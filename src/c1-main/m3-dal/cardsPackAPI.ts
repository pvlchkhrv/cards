import axios from 'axios';
import {PackType} from '../m2-bll/cardPacks-reducer';



export type GetPacksDataType = {
    cardPacks: PackType[];
    error: string;
}
export type PacksPostDataType = {
    cardPacks: {
        name: string
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: false
        type?: string
    }
};

export type PacksParamsType = {
    packName?: 'PAVEL PACK'
    min?: number
    max?: number
    page?: number
    pageCount?: number
    user_id?: string
    sortPacks?: string
}

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
});

export const packsAPI = {
    getPacks(userId: string) {
            return instance.get<GetPacksDataType>
            (`/cards/pack?user_id=${userId}&page=${1}&pageCount=${10}&min=${1}&max=${10}&sortPacks='0updated'`)
                .then(res => res.data);
    },
    addPack(title: string) {
        return instance.post('/cards/pack', {cardsPack: {name: title}})
            .then(res => res.data);
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
            .then(res => res.data);
    },
    async updatePack(id: string, title: string) {
        return await instance.put('/cards/pack', {cardsPack: {_id: id, name: title}});
    }
};

