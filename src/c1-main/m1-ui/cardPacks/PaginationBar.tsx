import React, {useState} from 'react';
import {Pagination} from '@material-ui/lab';

type PaginationPropsType = {
    pages: number
    page: number
    pageCount: number
    onChangePage: (e: React.ChangeEvent<unknown>, page: number) => void
    onChangeItemsQuantity: (e: React.ChangeEventHandler<HTMLInputElement>, pageCount: number) => void
}

export const PaginationBar: React.FC<PaginationPropsType> = ({
                                                                 page,
                                                                 pages,
                                                                 pageCount,
                                                                 onChangePage,
                                                                 onChangeItemsQuantity
                                                             }) => {
    return (
        <>
            <Pagination count={pages}
                        page={page}
                        onChange={onChangePage}/>
        </>
    )
}
