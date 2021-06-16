import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CardsStateType, getCardsThunk} from "../../m2-bll/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "@material-ui/core";
import {AppRootStateType} from "../../m2-bll/store";

type LearnPageType = {
    packId: string
}

export const LearnPage = () => {

    const {packId} = useParams<LearnPageType>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardsThunk(packId))
    }, [])

    // const getModalStyle = () => {
    //     const top = 50;
    //     const left = 50;
    // }

    // const pack = useSelector<AppRootStateType, CardsStateType[]>(state => state.cards[packId])

    // const classes = useStyles();
    // const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div>
            {/*<div style={modalStyle} className={classes.paper}>*/}
            {/*<LearnCardModal pack={pack} modalCloseHandler={handleClose}/>*/}
        </div>
    );

    return (
        <div>
            <h3>Ready to learn?</h3>
            <button onClick={handleOpen}>YES!</button>
            <button>Nope</button>
            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
        </div>
    )
}