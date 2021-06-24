import React, {useState} from "react";
import {Button} from "@material-ui/core";
import Modal from "./Modal";
import s from "./ModalContainer.module.css";

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
        setShow(false)
        onDeleteClickHandler(card_ID)
    }
    const [show, setShow] = useState(false);

    return (
        <>
            <Button disabled={disable} variant={'contained'} color={'secondary'}
                    size={'medium'}
                    onClick={() => setShow(true)
                    }>DELETE</Button>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}

                show={show}
            >
                <div className={s.main}>
                    <span>DELETE MODAL</span>
                    <div className={s.container}>
                        <div className={s.textField}>
                            <span><b>Do you really want to delete the card?</b></span>
                        </div>
                        <div className={s.groupBtn}>
                            <div>
                                <Button
                                    onClick={() => setShow(false)} variant={'contained'} color={'secondary'}
                                    size={'medium'}
                                >No</Button>
                            </div>
                            <div>
                                <Button
                                    onClick={deleteCard} variant={'contained'} color={'primary'} size={'medium'}
                                >Yes</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default DeleteModalContainer;