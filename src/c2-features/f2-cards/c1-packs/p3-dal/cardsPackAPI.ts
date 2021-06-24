import {PackType} from '../p2-bll/cardPacks-reducer';
import {instance} from '../../../../c1-main/m3-dal/instance';

export const packsAPI = {
    getPacks(queryParams: PacksQueryParamsType) {
        return instance.get<ResponseDataType>
        (`/cards/pack`, {params: queryParams})
            .then(res => {
                console.log(res.data)
                return res.data
            });
    },
    createPack(addPackPayload: AddPackPayloadType) {
        return instance.post('/cards/pack', {cardsPack: addPackPayload})
            .then(res => {
                console.log(res.data)
                return res.data
            });
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
            .then(res => res.data);
    },
    updatePack(updatePayload: UpdatePackPayloadType) {
        return instance.put('/cards/pack', {cardsPack: updatePayload})
    }
};

//types
export type PacksQueryParamsType = {
    packName?: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
    user_id?: string
    sortPacks?: string
    token?: string
}
export type AddPackPayloadType = {
    name?: string
    path?: string
    private?: boolean
    type?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: string
}
export type UpdatePackPayloadType = {
    _id: string
    name?: string
}

export type ResponseDataType = {
    cardPacks: PackType[]
    page: number
    pageCount: number
    minCardsCount: number
    maxCardsCount: number
    cardPacksTotalCount: number
}
