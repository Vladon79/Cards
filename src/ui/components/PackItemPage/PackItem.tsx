import React from 'react';
import {useAppSelector} from "../../../bll/store";
import {PackItemResponseType, PackItemType} from "../../../bll/reducers/packItem-reducer";

import Card from './Card/Card';
import TablePackItem from './TablePackItem/TablePackItem';

type ResponsePackItem = {
    carts: CardsType[],
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

type CardsType = [
    {
        answer: string
        question: string
        cardsPack_id: string
        grade: number
        shots: number
        user_id: string
        created: string
        updated: string
        _id: string
    }
]


const PackItem = () => {
    const packItem = useAppSelector<PackItemResponseType>(state => state.packItem)
    const card = useAppSelector<PackItemType[]>(state => state.packItem.cards)
    const nuller = card.length === 0

    return (
        <div>
            {nuller && <h1>Not found cards</h1>}
            <div>
                <TablePackItem/>
                {card.map(p => <Card key={p._id} question={p.question} answer={p.answer}
                                     updated={p.updated} create={p.created} grade={p.grade}/>)}
                {/*<SuperButton onClick={getCards}>getCards</SuperButton>*/}
                {/*<SuperSelect options={numbers}*/}
                {/*             value={pageCount}*/}
                {/*             onChangeOption={setPageCount}/>*/}
                {/*<SuperDoubleRange onChangeRange={setValuesOnSlider}*/}
                {/*                  value={[minCardsCount, maxCardsCount]}*/}
                {/*                  min={minCardsCount}*/}
                {/*                  max={maxCardsCount}*/}
                {/*/>*/}
                {/*<Paginator totalUsersCount={cardPacksTotalCount} pageSize={pageCount}*/}
                {/*           currentPage={page} onPageChange={changeNumberPage}/>*/}
            </div>

        </div>
    );
};

export default PackItem;