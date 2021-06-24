import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {PackType} from '../p2-bll/cardPacks-reducer';
import {PATH} from '../../../../c1-main/m1-ui/Routes';
import {NavLink} from 'react-router-dom';

type DataTablePropsType = {
    packs: PackType []
    deletePackHandler: (packId: string) => void
    editPackHandler: (packId: string, title: string) => void
    userId: string
}

export const DataTable: React.FC<DataTablePropsType> = ({
                                                            packs,
                                                            deletePackHandler,
                                                            editPackHandler,
                                                            userId
                                                        }) => {
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
                        {packs.map((pack) => (
                            <TableRow key={pack._id}>
                                <TableCell component="th" scope="row">
                                    <NavLink to={PATH.CARDS + `/${pack._id}`}>{pack.name}</NavLink>
                                </TableCell>
                                <TableCell align="center">{pack.cardsCount}</TableCell>
                                <TableCell align="center">{pack.updated}</TableCell>
                                <TableCell align="center">{pack.created}</TableCell>
                                <TableCell align="center">
                                    {
                                        userId === pack.user_id
                                            ? <div>
                                                <Button onClick={() => deletePackHandler(pack._id)}>Delete</Button>
                                                <Button
                                                    onClick={() => editPackHandler(pack._id, 'PAVEL PACK edited')}>Edit</Button>
                                                <Button onClick={() => {
                                                }}>Learn</Button>
                                            </div>

                                            : <Button onClick={() => {
                                            }}>Learn</Button>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
