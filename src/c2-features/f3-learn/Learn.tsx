import React, {useState} from 'react';
import {Button, Paper} from '@material-ui/core';
import s from './Lear.module.css'
import {CardType} from '../../c1-main/m2-bll/cards-reducer';

type LearnPropsType = {
    card: CardType
    isClicked: boolean
    setIsClicked: (bool: boolean) => void
    onNextClick: () => void
}

const Learn: React.FC<LearnPropsType> = ({
                                             isClicked,
                                             setIsClicked,
    onNextClick,
                                         }) => {

    return (
        <div className={s.container}>
            <Paper className={s.paper}>
                {
                    !isClicked
                        ? <div>
                            <h4>Question: "What`s the difference between bind, call, apply"</h4>
                            <Button onClick={() => setIsClicked(true)}>Show answer</Button>
                        </div>
                        : <div>
                            <h4>Question: "What`s the difference between bind, call, apply"</h4>
                            <h4>Answer: "Сокол не рысь!"</h4>
                            <div>
                                <h3>Rate yourself: </h3>
                                <form action="" className={s.buttons}>
                                    <Button>не шарю</Button>
                                    <Button>запамятовал</Button>
                                    <Button>долго соображал</Button>
                                    <Button>шарю</Button>
                                </form>
                            </div>
                        </div>
                }
                <Button variant='contained' onClick={onNextClick}>NEXT QUESTION</Button>
            </Paper>
        </div>
    )
}

export default Learn;
