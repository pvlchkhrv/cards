import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {Button, Container, TextField,} from '@material-ui/core'
import s from './CardsPage.module.css'
import {
    aboutMeThunk,
    CardsStateType,
    createCardThunk,
    deleteCardThunk,
    getCardsThunk,
    setNumberPage,
    setPageCount,
    setQuestion,
    setSortType,
    updateCardThunk
} from "../../m2-bll/cards-reducer";
import {TableData} from './Table';
import {RequestStatusType} from "../../m2-bll/app-reducer";
import {Redirect, useParams} from 'react-router-dom';
import Paginator from "./Paginator";
import Modal from "../modals/Modal";
import AddModalContainer from "../modals/AddModalContainer";

const CardsPageContainer = () => {
    console.log("CardsPageContainer")
    const [show, setShow] = useState(false);
    const searchValue = useSelector<AppRootStateType, string>(state => state.cards.searchValue);
    const [value, setValue] = useState(searchValue)
    const dispatch = useDispatch()
    const {cardPackID} = useParams<{ cardPackID: string }>();
    const page = useSelector<AppRootStateType, number>(state => state.cards.cardsData.page);
    const pageCount = useSelector<AppRootStateType, number>(state => state.cards.cardsData.pageCount);
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.cardsData.cardsTotalCount);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.app.isAuth);
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const cardsObj = useSelector<AppRootStateType, CardsStateType>(state => state.cards);
    const user = useSelector<AppRootStateType, any>(state => state.login.user);
    const userId = useSelector<AppRootStateType, string>(state => state.cards.cardsData.packUserId);

    const modalShow = (show: boolean) => {
        setShow(show);
    }

    const onDeleteClickHandler = (id: string) => {
        dispatch(deleteCardThunk(id, cardPackID));
    };
    const onCreateClickHandler = (question:string) => {
        dispatch(createCardThunk(cardPackID,question));
    };
    const onUpdateClickHandler = (id: string) => {
        dispatch(updateCardThunk(id, cardPackID));
    };
    const searchClick = () => {
        dispatch(setQuestion(value))
        dispatch(getCardsThunk(cardPackID))
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const sortUpClick = () => {
        dispatch(setSortType("0updated"))
        dispatch(getCardsThunk(cardPackID))
    }
    const sortDownClick = () => {
        dispatch(setSortType("1updated"))
        dispatch(getCardsThunk(cardPackID))
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        dispatch(setNumberPage(newPage + 1))
        dispatch(getCardsThunk(cardPackID))// newPage + 1, pageCount
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPageCount(+event.target.value))
        dispatch(getCardsThunk(cardPackID));//, page, +event.target.value
    };
    useEffect(() => {
        if (!isAuth) {
            dispatch(aboutMeThunk())
        }
        dispatch(getCardsThunk(cardPackID))
    }, [isAuth, dispatch])
    let disable = (user?._id === userId) ? false : true

    return (
        <div className={s.main}>
            <Container maxWidth="lg" className={s.container}>
                <h3>Cards List</h3>
                <div className={s.search}>
                    <div>
                        <TextField value={value} onChange={onChangeInput} label="Search by question" type="search"
                                   variant={'outlined'}
                                   size={'small'}/>
                    </div>
                    <div className={s.button}>
                        <Button onClick={searchClick} variant={'contained'} color={'primary'}
                                size={'medium'}>Search</Button>
                    </div>
                </div>
                <div className={s.addButton}>
                    <AddModalContainer disable={disable} onCreateClickHandler={onCreateClickHandler}/>
                    {/*<Button*/}
                    {/*    onClick={() => modalShow(true)} variant={'contained'} color={'primary'} size={'medium'}*/}
                    {/*>Add New Card</Button>*/}
                    {/*<Button*/}
                    {/*    onClick={onCreateClickHandler} variant={'contained'} color={'primary'} size={'medium'}*/}
                    {/*    disabled={disable}*/}
                    {/*>Add New Card</Button>*/}
                </div>
                <TableData
                    show={show}
                    modalShow={modalShow}
                    disable={disable}
                    onDeleteClickHandler={onDeleteClickHandler}
                    onUpdateClickHandler={onUpdateClickHandler}
                    cardsObj={cardsObj}
                    appStatus={appStatus}
                    sortDownClick={sortDownClick}
                    sortUpClick={sortUpClick}/>

                <Paginator cardsTotalCount={cardsTotalCount} page={page} pageCount={pageCount}
                           handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage}/>
            </Container>

        </div>
    )
}

export default CardsPageContainer;