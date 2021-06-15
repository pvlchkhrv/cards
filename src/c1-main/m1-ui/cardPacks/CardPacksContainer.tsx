import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {CardPacks} from './CardPacks';
import {Redirect} from 'react-router-dom';
import {
    createPack,
    deletePackOnServer,
    getPacks,
    PackType, setPage,
    setUserId,
    updatePackTitleOnServer
} from '../../m2-bll/cardPacks-reducer';

export const CardPacksContainer: React.FC = () => {
    const packs = useSelector<AppRootStateType, PackType[]>(state => state.packs.packsData.cardPacks);
    const {
        cardPacksTotalCount,
        maxCardsCount,
        minCardsCount,
        page,
        pageCount
    } = useSelector<AppRootStateType, any>(state => state.packs.packsData);
    const packUserId = useSelector<AppRootStateType, string>(state => state.packs.packUser_id);
    const user = useSelector<AppRootStateType, any>(state => state.login.user);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);
    const [isMine, setIsMine] = useState(!!packUserId);
    // const {params} = useParams();
    const pages = Math.ceil(cardPacksTotalCount / pageCount);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const getAllPacksHandler = () => {
        dispatch(setUserId(''));
        dispatch(getPacks());
        setIsMine(false);
        setPage(1);
    }
    const getUserPackHandler = () => {
        dispatch(setUserId(user._id));
        dispatch(getPacks());
        setIsMine(true);
        setPage(1);
    }
    const createPackHandler = (title: string) => {
        dispatch(createPack(title));
    }
    const deletePackHandler = (packId: string) => {
        dispatch(deletePackOnServer(packId));
    }
    const editPackHandler = (packId: string, title: string) => {
        dispatch(updatePackTitleOnServer(packId, title))
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

    if (!isAuth) {
        return <Redirect to={'/login'}/>
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
                   packUserId={packUserId}
                   isMine={isMine}
                   userId={user._id}
                   pages={pages}
                   pageCount={pageCount}
                   page={page}
        />
    )
}
