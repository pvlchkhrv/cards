import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {Button, ButtonGroup, Container, Grid, TextField,} from '@material-ui/core'
import s from './CardsPage.module.css'
import {
    aboutMeThunk,
    AuthInitialStateType,
    createCardThunk,
    deleteCardThunk,
    getCardsThunk, setPageCount, setQuestion,
    updateCardThunk
} from "../../m2-bll/cards-reducer";
import {TableData} from './Table';
import {RequestStatusType} from "../../m2-bll/app-reducer";
import Cards from "./Cards";
import {Pagination} from "@material-ui/lab";
import TablePagination from "@material-ui/core/TablePagination";

const CardsPageContainer = () => {
    console.log("CardsPageContainer")
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const searchValue = useSelector<AppRootStateType, string>(state => state.cards.searchValue);
    const page = useSelector<AppRootStateType, number>(state => state.cards.page);
    const pageCount = useSelector<AppRootStateType, number>(state => state.cards.pageCount);
    const cardsTotalCount = useSelector<AppRootStateType, number>(state => state.cards.cardsTotalCount);
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth);
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const cardsObj = useSelector<AppRootStateType, AuthInitialStateType>(state => state.cards);
    const onDeleteClickHandler = (id: string) => {
        dispatch(deleteCardThunk("", "5fa566f77b2f370004ef8cec", "", page, pageCount, id));
    };
    const onCreateClickHandler = () => {
        dispatch(createCardThunk("", "5fa566f77b2f370004ef8cec", "", page, pageCount));
    };
    const onUpdateClickHandler = (id: string) => {
        dispatch(updateCardThunk("", "5fa566f77b2f370004ef8cec", "", page, pageCount, id));
    };
    const searchClick = () => {
        dispatch(setQuestion(value))
        dispatch(getCardsThunk(value, "5fa566f77b2f370004ef8cec", "", page, pageCount))
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const sortUpClick = () => {
        dispatch(getCardsThunk("", "5fa566f77b2f370004ef8cec", "0updated", page, pageCount))
    }
    const sortDownClick = () => {
        dispatch(getCardsThunk("", "5fa566f77b2f370004ef8cec", "1updated", page, pageCount))
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        dispatch(getCardsThunk("", "5fa566f77b2f370004ef8cec", "", newPage + 1, pageCount))
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPageCount(+event.target.value))
        dispatch(getCardsThunk("", "5fa566f77b2f370004ef8cec", "", page, +event.target.value));
        console.log(+event.target.value)
    };
    useEffect(() => {
        if (!isAuth) {
            dispatch(aboutMeThunk())
        }
        dispatch(getCardsThunk("", "5fa566f77b2f370004ef8cec", "", page, pageCount))
    }, [isAuth, dispatch])

    return (
        <div className={s.main}>
            <div>
                <input type="text" value={value} onChange={onChangeInput}/>
                <button onClick={sortUpClick}>UP</button>
                <button onClick={sortDownClick}>DOWn</button>
                <button onClick={searchClick}>SEARCH</button>
            </div>
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
                    <Button
                        onClick={onCreateClickHandler} variant={'contained'} color={'primary'} size={'medium'}
                    >Add New Card</Button>
                </div>
                <TableData
                    onDeleteClickHandler={onDeleteClickHandler}
                    onUpdateClickHandler={onUpdateClickHandler}
                    cardsObj={cardsObj}
                    appStatus={appStatus}
                    sortDownClick={sortDownClick}
                    sortUpClick={sortUpClick}/>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={cardsTotalCount}
                    rowsPerPage={pageCount}
                    page={page - 1}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Container>
            {/*<Pagination/>*/}
            {/*<Cards/>*/}
            {/*<TableData*/}
            {/*    onCreateClickHandler={onCreateClickHandler}*/}
            {/*    onDeleteClickHandler={onDeleteClickHandler}*/}
            {/*    onUpdateClickHandler={onUpdateClickHandler}*/}
            {/*    cardsObj={cardsObj}*/}
            {/*    appStatus={appStatus}/>*/}

        </div>
    )
}

export default CardsPageContainer;