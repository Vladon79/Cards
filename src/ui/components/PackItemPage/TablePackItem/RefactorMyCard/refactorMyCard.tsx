import React from 'react';
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import s from "../TablePackItem.module.scss";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../../bll/store";
import {deleteCardModalAC, updateCardModalAC} from "../../../../../bll/reducers/modalCard-reducer";

type RefactorMyCardType = {
    _id: string,
    newQuestion: string,
    newAnswer: string
}

const RefactorMyCard = ({_id, newQuestion, newAnswer}: RefactorMyCardType) => {
    const packItemId = useAppSelector<string>(state => state.packItemId.packItemId)
    const dispatch = useDispatch()

    const deleteCard = () => {
        dispatch(deleteCardModalAC(_id, packItemId))
        //dispatch(deleteCardTC(_id, packItemId))
    };

    const updateCard = () => {
        dispatch(updateCardModalAC(_id, newQuestion, newAnswer, packItemId))
        // dispatch(updateCardTC(_id, newQuestion, newAnswer, packItemId))
    };

    return (
        <div>
            <div className={s.buttonsBlock}>
                <SuperButton className={` ${s.button} ${s.delete}`} onClick={deleteCard}>Delete</SuperButton>
                <SuperButton className={s.button} onClick={updateCard}>Edit</SuperButton>
            </div>
        </div>
    );
};

export default RefactorMyCard;