import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {CardPacks} from './CardPacks';
import {Redirect} from 'react-router-dom';
import {
    createPack,
    deletePackOnServer,
    getPacks,
    PackType,
    setUserId,
    updatePackTitleOnServer
} from '../../m2-bll/cardPacks-reducer';

export const CardPacksContainer: React.FC = () => {
    const packs = useSelector<AppRootStateType, PackType[]>(state => state.packs.cardPacks);
    const packUserId = useSelector<AppRootStateType, string>(state => state.packs.packUser_id);
    const user = useSelector<AppRootStateType, any>(state => state.login.user);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth);
    const [isMine, setIsMine] = useState(!!packUserId);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const getAllPacksHandler = () => {
        dispatch(getPacks());
        setIsMine(false)
    }
    const getUserPackHandler = () => {
        debugger
        setUserId(user._id);
        dispatch(getPacks());
        setIsMine(true)
    }
    const createPackHandler = (title: string) =>  {
        dispatch(createPack(title));
    }
    const deletePackHandler = (packId: string) =>  {
        dispatch(deletePackOnServer(packId));
    }
    const editPackHandler = (packId: string, title: string) => {dispatch(updatePackTitleOnServer(packId, title))};

    if(!isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <CardPacks getAllPacksHandler={getAllPacksHandler}
                   getUserPackHandler={getUserPackHandler}
                   createPackHandler={createPackHandler}
                   deletePackHandler={deletePackHandler}
                   editPackHandler={editPackHandler}
                   packs={packs}
                   isMine={isMine}
        />
    )
}
