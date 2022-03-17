import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../bll/store";
import {
    changeNumberPageCardsAC,
    getPackItemTC,
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
import SuperDoubleRange from "../../common/SuperComponents/SuperDoubleRange";
import SuperSelect from "../../common/SuperComponents/SuperSelect";
import Paginator from "../../common/Paginator/Paginator";
import {useDispatch} from "react-redux";
import WindowForAddNewCard from "./WindowForAddNewCard/windowForAddNewCard";
import Preloader from "../../common/Preloader/Preloader";


const PackItem = () => {

    const arrayNumbers = [4, 5, 6, 7, 8, 9, 10]

    const [showWindowAddNewCard, setShowWindowAddNewCard] = useState<boolean>(false)

    const isFetching = useAppSelector<boolean>(state => state.app.isFetching)
    const packItem = useAppSelector<PackItemResponseType>(state => state.packItem)
    const cards = useAppSelector<PackItemType[]>(state => state.packItem.cards)
    const packItemId = useAppSelector<string>(state => state.packItemId.packItemId)
    const pageCount = useAppSelector<number>(state => state.packItem.page)
    const page = useAppSelector<number>(state => state.packItem.pageCount)
    const myUserID = useAppSelector<string>(state => state.auth.user._id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const minGradeDebounce = useDebounce(packItem.minGrade, 1000)
    // const maxGradeDebounce = useDebounce(packItem.maxGrade, 1000)

    const NO_CARDS = cards.length === 0

    useEffect(() => {
       dispatch(getPackItemTC(packItemId))
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
        dispatch(changeNumberPageCardsAC(num))
    };


    return (
        <>  {isFetching && <Preloader/>}
            {showWindowAddNewCard && <WindowForAddNewCard setShowWindowAddNewCard={setShowWindowAddNewCard}/>}
            {  !showWindowAddNewCard &&
            <div className={s.packsListPageContainer}>
                <div className={s.leftBlock}>
                        <SuperButton className={s.doubleButton} onClick={handleBackToPackList}>Back to Pack List</SuperButton>
                        {myUserID === packItem.packUserId &&
                        <SuperButton  className={s.doubleButton} onClick={() => setShowWindowAddNewCard(true)}>Add New Card</SuperButton>}
                    <h6>Number of cards</h6>
                    <SuperDoubleRange
                        onChangeRange={setValuesOnSlider}
                        value={[packItem.minGrade, packItem.maxGrade]}
                        min={packItem.minGrade}
                        max={packItem.maxGrade}/></div>
                {NO_CARDS && <h1>Not found cards</h1>}
                {!NO_CARDS &&
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
                                 onChangeOption={(pageCount) => setCardCount(Number(pageCount))}/>

                    <Paginator totalCount={packItem.cardsTotalCount} pageSize={packItem.pageCount}
                               currentPage={page}
                               changeNumberPage={(num) => changeNumberPage(num)} portionSize={10}/>
                </div>}
            </div>
            }

        </>
    );
};

export default React.memo(PackItem);