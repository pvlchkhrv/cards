import React, {useEffect} from 'react';
import {cardsAPI} from "../../m3-dal/cardsAPI";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {getCardsThunk} from "../../m2-bll/cards-reducer";

const CardsPage: React.FC = () => {
    const dispatch = useDispatch()
    const question = useSelector((state:AppRootStateType)=>state.cards.cards[0].question)
    const maxGrade = useSelector((state:AppRootStateType)=>state.cards.maxGrade)
    // useEffect(() => {
    // //     cardsAPI.getCards().then((res)=>{
    // //         console.log(res)
    // //     });
    // // })
    const onclickHandler = () => {
        dispatch(getCardsThunk())
    }
    return (
        <div>
            <h1>CARD PAGE</h1>
            {question}
            <button onClick={onclickHandler}>DISPATCH</button>
            {maxGrade}
        </div>

    )
}

export default CardsPage;