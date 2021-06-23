import React, {ChangeEvent, useState} from "react";
import Modal from "./Modal";
import {Button, TextField} from "@material-ui/core";
import s from "./ModalContainer.module.css"

interface AddModalProps {
    disable: boolean
    onCreateClickHandler: (question: string) => void
}

const AddModalContainer = ({
                               disable,
                               onCreateClickHandler
                           }: AddModalProps) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addCard = () => {
        setShow(false)
        onCreateClickHandler(value)
    }
    return (
        <>
            <Button disabled={disable}
                onClick={() => setShow(true)} variant={'contained'} color={'primary'} size={'medium'}
            >Add New Card</Button>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={300}
                height={200}
                show={show}
            >

                <div className={s.main}>
                    <span>ADD MODAL</span>
                    <div className={s.container}>
                        <TextField value={value} onChange={onChangeInput} label="Question" type="text"
                                   variant={'outlined'}
                                   size={'small'}/>
                        {/*<input value={value} onChange={onChangeInput} type="text"/>*/}
                        <div className={s.groupBtn}>
                            <div>
                                <Button
                                    onClick={() => setShow(false)} variant={'contained'} color={'primary'}
                                    size={'medium'}
                                >Close</Button>
                            </div>
                            <div>
                                <Button
                                    onClick={addCard} variant={'contained'} color={'primary'} size={'medium'}
                                >Add Card</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default AddModalContainer;