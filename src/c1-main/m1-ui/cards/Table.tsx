import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import s from './CardsPage.module.css'
import {AuthInitialStateType} from "../../m2-bll/cards-reducer";
import {RequestStatusType} from "../../m2-bll/app-reducer";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SortButtons from "./SortButtons";

interface TableProps {
    disable: boolean
    cardsObj: AuthInitialStateType
    appStatus: RequestStatusType
    onDeleteClickHandler: (cardPackId: string) => void
    onUpdateClickHandler: (id: string) => void
    sortUpClick: () => void
    sortDownClick: () => void
}

export const TableData = (
    {
        disable,
        onDeleteClickHandler,
        onUpdateClickHandler,
        appStatus,
        cardsObj,
        sortDownClick,
        sortUpClick
    }: TableProps) => {

    return (
        <div>
            {appStatus === 'loading' && <div>Loading...</div>}
            {appStatus === 'failed' && <div>{appStatus}</div>}
            {appStatus === 'succeed' && <div></div>}
            <TableContainer component={Paper}>
                <Table className={s.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell align="center">Answer</TableCell>
                            <TableCell align="center">Grade</TableCell>
                            <TableCell align="center">Updated
                                <SortButtons sortUpClick={sortUpClick} sortDownClick={sortDownClick}/>
                            </TableCell>
                            <TableCell align="center">Rating</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cardsObj.cardsData.cards.map((card) => (
                            <TableRow key={card._id}>
                                <TableCell component="th">{card.question}</TableCell>
                                <TableCell align="center">{card.answer}</TableCell>
                                <TableCell align="center">{card.grade}</TableCell>
                                <TableCell align="center">{card.updated}</TableCell>
                                <TableCell align="center">{card.rating}</TableCell>
                                <TableCell align="center">
                                    <Button disabled={disable} variant={'contained'} color={'primary'}
                                            size={'medium'}
                                            onClick={() => onUpdateClickHandler(card._id)}>EDIT</Button>
                                    <Button disabled={disable} variant={'contained'} color={'secondary'}
                                            size={'medium'}
                                            onClick={() => {
                                                onDeleteClickHandler(card._id)
                                            }}>DELETE</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}



