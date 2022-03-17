import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../bll/store";
import {
    changeNumberPageAC,
    PackItemResponseType,
    PackItemType,
    setCardsCountAC,
    setMaxMinGradeAC
} from "../../../bll/reducers/packItem-reducer";
import Card from './Card/Card';
import TablePackItem from './TablePackItem/TablePackItem';
import {useNavigate} from "react-router-dom";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import s from "../PacksListPage/PacksListPage.module.scss";
import style from "../../features/Login/SingIn/SignIn.module.scss"
import SuperDoubleRange from "../../common/SuperComponents/SuperDoubleRange";
import SuperSelect from "../../common/SuperComponents/SuperSelect";
import Paginator from "../../common/Paginator/Paginator";
import {useDispatch} from "react-redux";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import {useInput} from "../../../hooks/useInput";
import {addNewCardTC} from "../../../bll/reducers/myCard-reducer";
import WindowForAddNewCard from "./WindowForAddNewCard/windowForAddNewCard";


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

    const arrayNumbers = [4, 5, 6, 7, 8, 9, 10]

    const [showWindowAddNewCard, setShowWindowAddNewCard] = useState<boolean>(false)

    const packItem = useAppSelector<PackItemResponseType>(state => state.packItem)
    const cards = useAppSelector<PackItemType[]>(state => state.packItem.cards)
    const packItemId = useAppSelector<string>(state => state.packItemId.packItemId)
    const pageCount = useAppSelector<number>(state => state.packItem.pageCount)



    const dispatch = useDispatch()
    const navigate = useNavigate()


    // const minGradeDebounce = useDebounce(packItem.minGrade, 1000)
    // const maxGradeDebounce = useDebounce(packItem.maxGrade, 1000)

    const nuller = cards.length === 0

    useEffect(() => {
        // dispatch(getPackItemTC(packItemId))
    }, [])

    const handleBackToPackList = () => {
        navigate('/packsList')
    };


    const setValuesOnSlider = (value: number[]) => {
        dispatch(setMaxMinGradeAC(value[0], value[1]))
    };

    const setCardCount = (cardsCount: number) => {
        dispatch(setCardsCountAC(cardsCount))
    };

    const changeNumberPage = (num: number) => {
        dispatch(changeNumberPageAC(num))
    };


    return (
        <>
            {showWindowAddNewCard && <WindowForAddNewCard setShowWindowAddNewCard={setShowWindowAddNewCard}/>}
            {!showWindowAddNewCard &&
            <div className={s.packsListPageContainer}>
                <div className={s.leftBlock}>
                    <SuperButton onClick={handleBackToPackList}>Back to Pack List</SuperButton>
                    <SuperButton onClick={() => setShowWindowAddNewCard(true)}>Add New Card</SuperButton>
                    <h6>Number of cards</h6>
                    <SuperDoubleRange
                        onChangeRange={setValuesOnSlider}
                        value={[packItem.minGrade, packItem.maxGrade]}
                        min={packItem.minGrade}
                        max={packItem.maxGrade}/></div>
                {nuller && <h1>Not found cards</h1>}
                {!nuller &&
                <div className={s.rightBlock}>
                    <section className={s.table}>
                        <TablePackItem/>
                        {cards.map(p => <Card key={p._id}
                                              id={p._id}
                                              answer={p.answer}
                                              userId={p.user_id}
                                              question={p.question}
                                              updated={p.updated}
                                              create={p.created}
                                              grade={p.grade}/>)}
                    </section>

                    <SuperSelect options={arrayNumbers}
                                 value={pageCount}
                                 onChangeOption={(cardsCount) => setCardCount(cardsCount)}/>

                    <Paginator totalCount={packItem.cardsTotalCount} pageSize={packItem.pageCount}
                               currentPage={packItem.page}
                               changeNumberPage={(num) => changeNumberPage(num)} portionSize={10}/>
                </div>}
            </div>
            }
        </>
    );
};

export default React.memo(PackItem);