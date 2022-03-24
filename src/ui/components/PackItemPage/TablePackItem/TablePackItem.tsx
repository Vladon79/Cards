import s from './TablePackItem.module.scss'
import {useAppSelector} from "../../../../bll/store";
import {PackItemResponseType} from "../../../../bll/reducers/packItem-reducer";
import React from "react";
import {sortCardsType} from "../../../../bll/reducers/myCard-reducer";
import {useDispatch} from "react-redux";

type TablePackItemType = {
    sortCards:sortCardsType,
    setSortCards: ( sortCards:sortCardsType )=>void
}

const TablePackItem = ({sortCards, setSortCards}:TablePackItemType) => {
    const packItem = useAppSelector<PackItemResponseType>(state => state.packItem)
    const myUserID = useAppSelector<string>(state => state.auth.user._id)

    const dispatch = useDispatch()
    const questionSort = () => {
        if (sortCards !== '1question' && sortCards !==  '0question') {
            setSortCards('1question')
        } else if (sortCards === '1question') {
            setSortCards('0question')
        } else {
            setSortCards('1question')
        }
    }


    const answerSort = () => {
        if (sortCards !== '1answer' && sortCards !==  '0answer') {
            setSortCards('1answer')
        } else if (sortCards === '1answer') {
            setSortCards('0answer')
        } else {
            setSortCards('1answer')
        }
    }

    const updateSort = () => {

        if (sortCards !== '1updated' && sortCards !== '0updated') {
            //dispatch(sortCardAC('1updated'))
            setSortCards('1updated')
        } else if (sortCards === "1updated") {
            //dispatch(sortCardAC('0updated'))
            setSortCards('0updated')
        } else {
            //dispatch(sortCardAC('0updated'))
            setSortCards('1updated')

        }
    }

    const gradeSort = () => {

        if (sortCards !== '1grade' && sortCards !== '0grade') {
            //dispatch(sortCardAC('1updated'))
            setSortCards('1grade')
        } else if (sortCards === "1grade") {
            //dispatch(sortCardAC('0updated'))
            setSortCards('0grade')
        } else {
            //dispatch(sortCardAC('0updated'))
            setSortCards('1grade')

        }
    }

    return (
        <div className={s.pack}>
            <p className={s.pack_block_question} onClick={questionSort}>
                Question
                {
                    sortCards !==  '1question' && sortCards !== '0question'
                        ? <span></span>
                        : sortCards ===  '1question'
                            ? <span className={s.arrow}>⬆</span>
                            : <span className={s.arrow}>⬇</span>
                }
            </p>
            <p className={s.pack_block_answer} onClick={answerSort}>
                Answer
                {
                    sortCards !==  '1answer' && sortCards !== '0answer'
                        ? <span></span>
                        : sortCards ===  '1answer'
                            ? <span className={s.arrow}>⬆</span>
                            : <span className={s.arrow}>⬇</span>
                }
            </p>
            <p className={`${s.pack_block_update} ${s.p_sort}`} onClick={updateSort}>
                Last update
                {
                    sortCards !== '1updated' && sortCards !== '0updated'
                        ? <span></span>
                        : sortCards === "1updated"
                            ? <span className={s.arrow}>⬆</span>
                            : <span className={s.arrow}>⬇</span>
                }
            </p>
            <p className={s.pack_block_createdBy}>Create by</p>
            <p className={s.pack_block_grade} onClick={gradeSort}>
                Grade
                {
                    sortCards !==  '1grade' && sortCards !==  '0grade'
                        ? <span></span>
                        : sortCards ===  '1grade'
                            ? <span className={s.arrow}>⬆</span>
                            : <span className={s.arrow}>⬇</span>
                }
            </p>
            {packItem.packUserId === myUserID && <p className={s.pack_block_action}>Action</p>}
        </div>
    )
}
export default React.memo( TablePackItem)