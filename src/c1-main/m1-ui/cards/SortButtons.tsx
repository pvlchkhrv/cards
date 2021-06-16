import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

interface PaginatorProps {
    sortUpClick: () => void
    sortDownClick: () => void
}

const SortButtons = ({
                         sortUpClick,
                         sortDownClick
                     }: PaginatorProps) => {
    return <>
        <IconButton onClick={sortDownClick} size="small">
            <ArrowUpwardIcon fontSize="inherit"/>
        </IconButton>
        <IconButton onClick={sortUpClick} size="small">
            <ArrowDownwardIcon fontSize="inherit"/>
        </IconButton>
    </>
}

export default SortButtons;