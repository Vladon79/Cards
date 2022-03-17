import React from 'react';
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import s from "../../../PacksListPage/TablePack/TablePack.module.scss";
import {useDispatch} from "react-redux";
import {deleteCardTC, updateCardTC} from "../../../../../bll/reducers/myCard-reducer";

type RefactorMyCardType = {
    _id: string,
    newQuestion: string,
    newAnswer: string
}

const RefactorMyCard = ({_id, newQuestion, newAnswer}: RefactorMyCardType) => {
    const dispatch = useDispatch()
    const deleteCard = () => {
        dispatch(deleteCardTC(_id))
    };

    const updateCard = () => {
        dispatch(updateCardTC(_id, newQuestion, newAnswer))
    };

    return (
        <div>
            <div>
                <SuperButton className={` ${s.button} ${s.delete}`} onClick={deleteCard}>Delete</SuperButton>
                <SuperButton className={s.button} onClick={updateCard}>Edit</SuperButton>
            </div>
        </div>
    );
};

export default RefactorMyCard;