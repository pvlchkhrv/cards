import React, {useState} from "react";
import Modal from "./DeleteModal";
import {Button} from "@material-ui/core";
import {AuthInitialStateType} from "../../../m2-bll/cards-reducer";
import {RequestStatusType} from "../../../m2-bll/app-reducer";

interface DeleteModalProps {
    card_ID: string
    disable: boolean
    onDeleteClickHandler: (cardPackId: string) => void
}

const DeleteModalContainer = (
    {
        disable,
        onDeleteClickHandler,
        card_ID
    }: DeleteModalProps
) => {
    const deleteCard = () => {
        debugger
        setShow(false)
        onDeleteClickHandler(card_ID)
    }
    const [show, setShow] = useState(false);


    return (
        <>
            <Button disabled={disable} variant={'contained'} color={'secondary'}
                    size={'medium'}
                    onClick={() => setShow(true)
                        // () => {onDeleteClickHandler(card._id)}
                    }>DELETE</Button>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
                // modalOnClick={() => setShow(false)}

                show={show}
            >
                Delete Modal
                <span>Вы действительно хотите удалить эту карточку?</span>
                <button onClick={deleteCard}>Yes</button>
                <button onClick={() => setShow(false)}>No</button>
            </Modal>
        </>
    );
}

export default DeleteModalContainer;