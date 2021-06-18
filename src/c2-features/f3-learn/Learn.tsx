import React, {useState} from 'react';
import {Button, Paper} from '@material-ui/core';
import s from './Lear.module.css'

type LearnPropsType = {}

const Learn: React.FC<LearnPropsType> = () => {
    const [isClicked, setIsClicked] = useState(false)
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
                                <form action="">
                                    <Button>шарю</Button>
                                    <Button>не шарю</Button>
                                    <Button>поплыл</Button>
                                    <Button>запамятовал</Button>
                                </form>
                            </div>
                        </div>
                }
                <Button variant='contained'>NEXT QUESTION</Button>


            </Paper>
        </div>
    )
}

export default Learn;
