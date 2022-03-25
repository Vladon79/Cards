import React, {ChangeEvent, useState} from 'react';
import Preloader from "../../../common/Preloader/Preloader";
import {useAppSelector} from "../../../../bll/store";
import s from './LearnPack.module.scss';
import ErrorBar from "../../../common/ErrorBar/ErrorBar";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import SuperRadio from "../../../common/c6-SuperRadio/SuperRadio";
import {useNavigate, useParams} from 'react-router-dom';
import {PackItemType} from '../../../../bll/reducers/packItem-reducer';

const radioValues = ['Did not know', 'Forgot', 'A lot of thought', 'Сonfused', 'Knew the answer']

const LearnPack = () => {

    const isFetching = useAppSelector<boolean>(state => state.app.isFetching)
    const navigate = useNavigate()
    const responseError = useAppSelector<null | string>(state => state.app.error)
    const cardsArr = useAppSelector<Array<PackItemType>>(state => state.packItem.cards)
    const cardNumber = Math.floor(Math.random() * cardsArr.length)

    const [isShow, setIsShow] = useState<boolean>(false)
    const [radioCurrentValue, setRadioCurrentValue] = useState<string>(radioValues[0])
    const [question, setQuestion] = useState<number>(0)


    const cancelBtnHandler = () => {
        navigate(`/packsList`)
    }

    const showAnswerBtnClickHandler = () => {
        setIsShow(true)
        console.log(cardNumber)
    }

    const nextBtnClickHandler = () => {
        console.log('next')
        console.log(cardNumber)
        setQuestion(1)
    }

    const radioOnChangeCallback = (value: string) => {
        setRadioCurrentValue(value)
    }

    return (
        <section className={s.main_box}>
            {isFetching
                ? <Preloader/>
                :
                <section className={s.learn_box}>

                    <div className={s.error_box_form}>
                        {responseError && <ErrorBar/>}
                    </div>

                    <div className={s.learn_box_header}>
                        Learn “Pack Name”
                    </div>

                    <div className={s.question_box}>
                        <span className={s.question_question}>Question: </span>
                        <span className={s.question_text}>{cardsArr[question].question}</span>
                    </div>

                    {isShow && <>
                        <div className={s.answer_box}>
                            <span className={s.question_question}>Answer: </span>
                            <span className={s.question_text}>“This is how "This" works in JavaScript”</span>
                        </div>

                        <div className={s.rate_box}>
                            <h3 className={s.rate_header_text}>Rate yourself:</h3>
                            <div className={s.radio}>
                                <SuperRadio
                                    options={radioValues}
                                    onChangeOption={radioOnChangeCallback}
                                    value={radioCurrentValue}
                                />
                            </div>
                        </div>
                    </>
                    }

                    <div className={s.box_buttons}>
                        <SuperButton
                            onClick={cancelBtnHandler}
                            className={s.cancel_btn}
                            cancel={true}
                        >
                            Cancel
                        </SuperButton>

                        {!isShow &&
                        <SuperButton
                            onClick={showAnswerBtnClickHandler}
                            className={s.show_answer_btn}
                        >
                            Show answer
                        </SuperButton>
                        }

                        {isShow &&
                        <SuperButton
                            onClick={nextBtnClickHandler}
                            className={s.show_answer_btn}
                        >
                            Next
                        </SuperButton>
                        }
                    </div>
                </section>
            }
        </section>
    );
};

export default LearnPack;