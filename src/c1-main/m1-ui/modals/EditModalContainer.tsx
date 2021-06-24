import React, {ChangeEvent, useState} from "react";
import Modal from "./Modal";
import {Button, TextField} from "@material-ui/core";
import s from "./ModalContainer.module.css"

interface EditModalProps {
    cardID: string
    questionProps: string
    answerProps: string
    disable: boolean
    onUpdateClickHandler: (id: string, question: string, answer: string) => void
}

const EditModalContainer = ({
                                cardID,
                                disable,
                                questionProps,
                                answerProps,
                                onUpdateClickHandler
                            }: EditModalProps) => {
    const [show, setShow] = useState(false);
    const [question, setQuestion] = useState(questionProps);
    const [answer, setAnswer] = useState(answerProps);

    const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value)
    }
    const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value)
    }

    const editCard = () => {
        setShow(false)
        onUpdateClickHandler(cardID, question, answer)
    }
    return (
        <>
            <Button disabled={disable}
                    onClick={() => setShow(true)} variant={'contained'} color={'primary'} size={'medium'}
            >EDIT</Button>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={300}
                height={200}
                show={show}
            >

                <div className={s.main}>
                    <span>EDIT MODAL</span>
                    <div className={s.container}>
                        <div className={s.textField}>
                            <TextField value={question} onChange={onChangeQuestion} label="Question" type="text"
                                       variant={'outlined'}
                                       size={'small'}/>
                        </div>
                        <div className={s.textField}>
                            <TextField value={answer} onChange={onChangeAnswer} label="Answer" type="text"
                                       variant={'outlined'}
                                       size={'small'}/>
                        </div>
                        <div className={s.groupBtn}>
                            <div>
                                <Button
                                    onClick={() => setShow(false)} variant={'contained'} color={'primary'}
                                    size={'medium'}
                                >Close</Button>
                            </div>
                            <div>
                                <Button
                                    onClick={editCard} variant={'contained'} color={'primary'} size={'medium'}
                                >Edit Card</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default EditModalContainer;