import React, {ChangeEvent} from 'react';
import {Button, ButtonGroup, Container, Grid, TextField,} from '@material-ui/core';
import s from './CardPackagePage.module.css'
import {DataTable} from './DataTable';
import {DoubleSlider} from './DoubleSlider';
import {PaginationBar} from './PaginationBar';
import {PackType} from '../../m2-bll/cardPacks-reducer';

type CardPacksPropsType = {
    getAllPacksHandler: () => void
    getUserPackHandler: () => void
    createPackHandler: (title: string) => void
    deletePackHandler: (packId: string) => void
    editPackHandler: (packId: string, title: string) => void
    onChangePage: (e: React.ChangeEvent<unknown>, page: number) => void
    onChangeItemsQuantity: (e: React.ChangeEventHandler<HTMLInputElement>, pageCount: number) => void
    packs: PackType[]
    packUserId: string
    userId: string
    isMine: boolean
    pages: number
    page: number
    pageCount: number
}


export const CardPacks: React.FC<CardPacksPropsType> = ({
                                                            getAllPacksHandler,
                                                            getUserPackHandler,
                                                            createPackHandler,
                                                            deletePackHandler,
                                                            editPackHandler,
                                                            onChangePage,
                                                            onChangeItemsQuantity,
                                                            packs,
                                                            packUserId,
                                                            userId,
                                                            isMine,
                                                            pages,
                                                            page,
                                                            pageCount
                                                        }) => {

    return (
        <>
            <Container fixed className={s.container}>
                <Grid container>
                    <Grid item xs={3} className={s.settings}>
                        <div>
                            <h5>Show Card Packs</h5>
                            {
                                isMine
                                    ? <Button
                                        color="secondary"
                                        variant='contained'
                                        onClick={getAllPacksHandler}
                                    >Show All Packs</Button>
                                    : <Button color="primary"
                                              variant='contained'
                                              onClick={getUserPackHandler}
                                    >Show My Packs</Button>
                            }
                        </div>
                        <div>
                            <h5>Number Of Cards</h5>
                            <DoubleSlider/>
                        </div>
                    </Grid>
                    <Grid item xs={9} className={s.packList}>
                        <h3>Packs List</h3>
                        <div>
                            <TextField id="standard-search" label="Search" type="search" variant={'outlined'}
                                       size={'small'}/>
                            <Button variant={'contained'}
                                    color={'secondary'}
                                    size={'large'}
                                    onClick={() => createPackHandler('PAVEL PACK')}
                            >Add New Pack</Button>
                        </div>
                        <DataTable packs={packs}
                                   deletePackHandler={deletePackHandler}
                                   editPackHandler={editPackHandler}
                                   packUserId={packUserId}
                                   userId={userId}
                        />
                        <PaginationBar pages={pages}
                                       page={page}
                                       pageCount={pageCount}
                                       onChangePage={onChangePage}
                                       onChangeItemsQuantity={onChangeItemsQuantity}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

