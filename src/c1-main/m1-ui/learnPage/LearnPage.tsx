import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CardType, getCardsThunk} from "../../m2-bll/cards-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import Button from "../common/button/Button";


const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

const LearnPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    // const [first, setFirst] = useState<boolean>(0);
    const {cards} = useSelector((store: AppRootStateType) => store.cards.cardsData);
    const {cardPackID} = useParams<{ cardPackID: string }>();

    const [card, setCard] = useState<CardType>({
        answer: 'answer fake',
        question: 'question fake',
        cardsPack_id: '',
        grade: 0,
        rating: 0,
        shots: 0,
        type: '',
        user_id: '',
        created: '',
        updated: '',
        __v: 0,
        _id: 'fake'
    });

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (first) {
            dispatch(getCardsThunk(cardPackID));
            setFirst(false);
        }

        console.log('cards', cards)
        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, cardPackID, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            // dispatch
            setCard(getCard(cards));
        } else {

        }
    }

    // DEV_VERSION && console.log('render LearnPage');
    return (
        <div>
            LearnPage

            <div>{card.question}</div>
            <div>
                <Button onClick={() => setIsChecked(true)}>check</Button>
            </div>

            {isChecked && (
                <>
                    <div>{card.answer}</div>

                    {grades.map((g, i) => (
                        <Button key={'grade-' + i} onClick={() => {
                        }}>{g}</Button>
                    ))}

                    <div><Button onClick={onNext}>next</Button></div>
                </>
            )}
        </div>
    );
};

export default LearnPage;