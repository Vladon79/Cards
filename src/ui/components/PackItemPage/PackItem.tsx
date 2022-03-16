import React, {useState} from 'react';
import {useAppSelector} from "../../../bll/store";
import {PackItemResponseType, PackItemType} from "../../../bll/reducers/packItem-reducer";
import Card from './Card/Card';
import TablePackItem from './TablePackItem/TablePackItem';
import {useNavigate} from "react-router-dom";
import SuperButton from "../../common/c2-SuperButton/SuperButton";

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
    const navigate = useNavigate()
    const nuller = card.length === 0

    const handleBackToPackList = () => {
        navigate('/packsList')
    };


    return (
        <div>
            <SuperButton onClick={handleBackToPackList}>Back to Pack List</SuperButton>
            {nuller && <h1>Not found cards</h1>}
            {!nuller && <div>
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
            </div>}


        </div>
    );
};

export default PackItem;