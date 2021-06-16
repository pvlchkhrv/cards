import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

interface PaginatorProps {
    cardsTotalCount: number
    pageCount: number
    page: number
    handleChangePage: (event: unknown, newPage: number) => void
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Paginator = ({
                       cardsTotalCount,
                       pageCount,
                       page,
                       handleChangePage,
                       handleChangeRowsPerPage

                   }:PaginatorProps) => {
    return <>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={cardsTotalCount}
            rowsPerPage={pageCount}
            page={page - 1}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </>
}

export default Paginator;