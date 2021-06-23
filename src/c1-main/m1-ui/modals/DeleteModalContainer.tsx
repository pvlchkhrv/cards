import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {AuthInitialStateType} from "../../m2-bll/cards-reducer";
import {RequestStatusType} from "../../m2-bll/app-reducer";
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
                        <span><b>Do you really want to delete the card?</b></span>
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
                {/*Delete Modal*/}
                {/*<span>Вы действительно хотите удалить эту карточку?</span>*/}
                {/*<button onClick={deleteCard}>Yes</button>*/}
                {/*<button onClick={() => setShow(false)}>No</button>*/}
            </Modal>
        </>
    );
}

export default DeleteModalContainer;