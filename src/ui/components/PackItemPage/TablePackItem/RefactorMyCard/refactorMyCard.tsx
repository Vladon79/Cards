import React from 'react';
import {useDispatch} from "react-redux";
import s from "../TablePackItem.module.scss";
import {useAppSelector} from "../../../../../bll/store";
import {deleteCardModalAC, updateCardModalAC} from "../../../../../bll/reducers/modalCard-reducer";
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";

type RefactorMyCardType = {
    _id: string,
    newQuestion: string,
    newAnswer: string
}

const RefactorMyCard = ({_id, newQuestion, newAnswer}: RefactorMyCardType) => {
    
    const dispatch = useDispatch()

    const deleteCard = () => {
        dispatch(deleteCardModalAC(_id))
    };

    const updateCard = () => {
        dispatch(updateCardModalAC(newQuestion, newAnswer, _id))
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