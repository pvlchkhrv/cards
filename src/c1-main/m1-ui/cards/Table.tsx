import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import classes from './CardsPage.module.css'
import {createCardThunk, deleteCardThunk, updateCardThunk} from "../../m2-bll/cards-reducer";
import {RequestStatusType} from "../../m2-bll/app-reducer";

export const TableData = () => {
    const dispatch = useDispatch()
    const appStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const cards = useSelector((state: AppRootStateType) => state.cards.cards)
    const onDeleteClickHandler = (id: string) => {
        dispatch(deleteCardThunk(id));
    };
    const onCreateClickHandler = (cardPackId: string) => {
        dispatch(createCardThunk(cardPackId));
        // alert("create");
    };
    const onUpdateClickHandler = (id: string) => {
      dispatch(updateCardThunk(id));
        // alert("update")
    };

    return (
        <div>
            {appStatus === 'loading' && <div>Loading...</div>}
            {appStatus === 'failed' && <div>{appStatus}</div>}
            {appStatus === 'succeed' && <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Question</TableCell>
                                <TableCell align="center">Answer</TableCell>
                                <TableCell align="center">Grade</TableCell>
                                <TableCell align="center">Updated</TableCell>
                                <TableCell align="center">Rating</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cards.map((card) => (
                                <TableRow key={card._id}>
                                    <TableCell component="th">{card.question}</TableCell>
                                    <TableCell align="center">{card.answer}</TableCell>
                                    <TableCell align="center">{card.grade}</TableCell>
                                    <TableCell align="center">{card.updated}</TableCell>
                                    <TableCell align="center">{card.rating}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => onCreateClickHandler(card.cardsPack_id)}>ADD</Button>
                                        <Button onClick={() => onUpdateClickHandler(card._id)}>EDIT</Button>
                                        <Button onClick={() => {
                                            onDeleteClickHandler(card._id)
                                        }}>DELETE</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <PaginationBar/>
            </div>}
        </div>
    );
}

export const PaginationBar = () => {
    return (
        <div>
            <Pagination count={10} variant="outlined"/>
        </div>
    )
}

