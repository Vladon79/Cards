import React, {useState} from 'react';
import style from "../../../features/Login/SingIn/SignIn.module.scss";
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {addNewCardTC} from "../../../../bll/reducers/myCard-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../bll/store";

type WindowForAddNewCardType = {
    setShowWindowAddNewCard: (showWindowAddNewCard:boolean)=>void
}

const WindowForAddNewCard = ({setShowWindowAddNewCard}:WindowForAddNewCardType) => {
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const packItemId = useAppSelector<string>(state => state.packItemId.packItemId)

    const dispatch = useDispatch()

    const handleAddNewCard = () => {
        dispatch(addNewCardTC(packItemId, question, answer))
        setShowWindowAddNewCard(false)
    };

    const handleCancelAddNewCard = () => {
        setShowWindowAddNewCard(false)
    };

    return (
        <div>
            <section className={style.main_box}>
                <section className={style.sign_in_box}>
                    <div className={style.sign_in_box_header}>
                        <div className={style.sign_in_text}>Add new card</div>
                    </div>
                    <div className={style.input_box_form}>
                        <SuperInputText value={question}
                                        name='Question'
                                        onChange={(e) => setQuestion(e.currentTarget.value)}
                                        placeholder='Enter question...'

                        />
                        <SuperInputText value={answer}
                                        name='Answer'
                                        onChange={(e) => setAnswer(e.currentTarget.value)}
                                        placeholder='Enter answer...'
                        />
                    </div>
                    <div className={style.input_box_buttons}>
                        <SuperButton onClick={handleAddNewCard}>
                            Add new card
                        </SuperButton>
                        <SuperButton onClick={handleCancelAddNewCard}>
                            Cancel
                        </SuperButton>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default WindowForAddNewCard;