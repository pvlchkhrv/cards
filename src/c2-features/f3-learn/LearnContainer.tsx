import React from 'react';
import Learn from './Learn';
import {CardType} from '../../c1-main/m2-bll/cards-reducer';

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

    return (
        <div>
            <Learn/>
        </div>
    )
}

export default LearnContainer;
