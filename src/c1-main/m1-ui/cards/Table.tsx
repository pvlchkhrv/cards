import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import classes from './CardsPage.module.css'

export const TableData = () => {

    const cards = useSelector((state: AppRootStateType) => state.cards.cards)

    return (
        <div>
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
                                    <Button>ADD</Button>
                                    <Button>EDIT</Button>
                                    <Button>DELETE</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationBar/>
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

