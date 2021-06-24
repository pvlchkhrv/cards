import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../c1-main/m2-bll/store';
import {CardPacks} from './CardPacks';
import {
    createPack,
    deletePack,
    getPacks,
    getStartPacks,
    PackType,
    setPage,
    updatePack,
} from '../p2-bll/cardPacks-reducer';
import {authMe} from '../../../f1-auth/a1-login/login-reducer';

export const CardPacksContainer: React.FC = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth)
    const packs = useSelector<AppRootStateType, PackType[]>(state => state.packs.packsData.cardPacks)
    const {
        cardPacksTotalCount,
        maxCardsCount,
        minCardsCount,
        page,
        pageCount
    } = useSelector<AppRootStateType, any>(state => state.packs.packsData)
    const userId = useSelector<AppRootStateType, string>(state => state.profile.profile._id)
    const [isMine, setIsMine] = useState(false)
    const pagesQuantity = Math.ceil(cardPacksTotalCount / pageCount)

    const dispatch = useDispatch();

    useEffect(() => {
        if(!userId) {
            dispatch(authMe())
        }
        dispatch(getStartPacks())
    }, [])

    // const getPacksHandler = () => {
    //     isMine ? dispatch(getPacks(userId)) : dispatch(getPacks())
    //     setIsMine(!isMine)
    // }

    const getAllPacksHandler = () => {
        dispatch(getPacks())
        setIsMine(false)
        dispatch(setPage(1))
    }
    const getUserPackHandler = () => {
        dispatch(authMe())
        dispatch(getPacks(userId));
        setIsMine(true);
        setPage(1);
    }
    const createPackHandler = (title: string) => {
        dispatch(createPack(title));
    }
    const deletePackHandler = (packId: string) => {
        dispatch(deletePack(packId));
    }
    const editPackHandler = (packId: string, title: string) => {
        dispatch(updatePack({_id: packId, name: title}))
    }
    const onChangePageHandler = (e: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
        dispatch(getPacks());
    }
    const onChangePageCountHandler = (e: React.ChangeEventHandler<HTMLInputElement>, pageCount: number) => {
        dispatch(getPacks());
    }

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {

    }

    const onChangeSliderHandler = (e: any, newValue: number | number[]) => {

    }

    return (
        <CardPacks getAllPacksHandler={getAllPacksHandler}
                   getUserPackHandler={getUserPackHandler}
                   createPackHandler={createPackHandler}
                   deletePackHandler={deletePackHandler}
                   editPackHandler={editPackHandler}
                   onChangePage={onChangePageHandler}
                   onChangeItemsQuantity={onChangePageCountHandler}
                   packs={packs}
                   isMine={isMine}
                   userId={userId}
                   pages={pagesQuantity}
                   pageCount={pageCount}
                   page={page}
        />
    )
}
