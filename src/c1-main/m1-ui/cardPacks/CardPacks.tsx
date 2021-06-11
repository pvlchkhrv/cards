import React from 'react';
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
    packs: PackType[]
    isMine: boolean
}


export const CardPacks: React.FC<CardPacksPropsType> = ({
                                                            getAllPacksHandler,
                                                            getUserPackHandler,
                                                            createPackHandler,
                                                            deletePackHandler,
                                                            editPackHandler,
                                                            packs,
                                                            isMine
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
                                   isMine={isMine}
                        />
                        <PaginationBar/>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

