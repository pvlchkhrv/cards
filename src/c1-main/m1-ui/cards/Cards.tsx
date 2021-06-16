import React, {useEffect} from 'react';
import {cardsAPI} from "../../m3-dal/cardsAPI";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {aboutMeThunk, AuthInitialStateType, getCardsThunk} from "../../m2-bll/cards-reducer";
import { TableData } from './Table';
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {RequestStatusType} from "../../m2-bll/app-reducer";
interface CardsProps {
    cardsObj: AuthInitialStateType
    appStatus: RequestStatusType
    onDeleteClickHandler: (cardPackId: string) => void
    onCreateClickHandler: (cardPackId: string) => void
    onUpdateClickHandler: (id: string) => void
}
const Cards = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth);
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    // const onclickHandler = () => {
    //     dispatch(getCardsThunk())
    // }
    // if (!isAuth) {
    //     return <Redirect to={PATH.LOGIN}/>
    // }
    return (

        <div>
            <h1>CARD PAGE</h1>

            {/*<button onClick={onclickHandler}>DISPATCH</button>*/}
            {/*{maxGrade}*/}
            {/*<TableData />*/}
            {/*{appStatus === 'loading' && <div>Loading...</div>}*/}
            {/*{appStatus === 'failed' && <div>{appStatus}</div>}*/}
            {/*{appStatus === 'succeed' && <div>{appStatus}</div>}*/}
        </div>

    )
}

export default Cards;