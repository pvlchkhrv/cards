import React from 'react';
import {Button, ButtonGroup, Container, Grid, TextField,} from '@material-ui/core';
import s from './CardPackagePage.module.css'
import {DataTable} from './DataTable';
import {DoubleSlider} from './DoubleSlider';

export const CardPacksPage = () => {
    return (
        <div>
            <Container fixed className={s.container}>
                <Grid container>
                    <Grid item xs={3} className={s.settings}>
                        <div>
                            <h5>Show Card Packs</h5>
                            <ButtonGroup size="large" aria-label="large outlined primary button group">
                                <Button color="primary" variant='contained'>My</Button>
                                <Button color="secondary" variant='contained'>All</Button>
                            </ButtonGroup>
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
                            <Button variant={'contained'} color={'secondary'} size={'large'}>Add New Pack</Button>
                        </div>
                        <DataTable/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

