import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {PackType} from '../../m3-dal/cardsPackAPI';
import React, {useEffect} from 'react';
import {deletePackOnServer, getPacksFromServer} from '../../m2-bll/cardPacks-reducer';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';

export const DataTable = () => {

    const rows = useSelector<AppRootStateType, PackType[]>(state => state.packs.cardPacks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacksFromServer({}));
    }, [dispatch]);

    const onDeleteClickHandler = (id: string) => {
        dispatch(deletePackOnServer(id));
        dispatch(getPacksFromServer);
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={'classes.table'} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Title</b></TableCell>
                            <TableCell align="center">Cards</TableCell>
                            <TableCell align="center">Updated</TableCell>
                            <TableCell align="center">Created</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.cardsCount}</TableCell>
                                <TableCell align="center">{row.updated}</TableCell>
                                <TableCell align="center">{row.created}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => onDeleteClickHandler(row._id)}>Delete</Button>
                                    <Button>Edit</Button>
                                    <Button>Learn</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationBar/>
        </div>
    )
}

export const PaginationBar = () => {
    return (
        <div>
            <Pagination count={10} variant="outlined"/>
        </div>
    )
}
