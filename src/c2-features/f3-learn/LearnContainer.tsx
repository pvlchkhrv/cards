import React, {useEffect, useState} from 'react';
import Learn from './Learn';
import {CardType, getCardsThunk} from '../../c1-main/m2-bll/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../c1-main/m2-bll/store';
import {useParams} from 'react-router-dom';

const LearnContainer: React.FC<{}> = () => {

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
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cardsData.cards)
    const {cardPackID} = useParams<{ cardPackID: string }>();

    const [isClicked, setIsClicked] = useState(false)
    const [card, setCard] = useState<CardType>({
        answer: 'Сокол не рысь!',
        question: 'Сокол - рысь?',
        cardsPack_id: '',
        grade: 0,
        rating: 0,
        shots: 0,
        type: '',
        user_id: '',
        created: '',
        updated: '',
        __v: 0,
        _id: ''
    });
    const [first, setFirst] = useState<boolean>(true);
    const dispatch = useDispatch()

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


    const onNextClick = () => {
        setIsClicked(false)
        setCard(getCard(cards))
    }


    return (
        <div>
            <Learn isClicked={isClicked}
                   setIsClicked={setIsClicked}
                   card={card}
                   onNextClick={onNextClick}
            />
        </div>
    )
}

export default LearnContainer;
