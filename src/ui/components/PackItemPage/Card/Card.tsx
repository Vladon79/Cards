import s from './Card.module.scss'
import {useAppSelector} from "../../../../bll/store";
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import {useState} from "react";
import {useInput} from "../../../../hooks/useInput";
import RefactorMyCard from "../TablePackItem/RefactorMyCard/refactorMyCard";


type CardType = {
    id:string
    userId: string,
    question: string
    answer: string
    updated: string,
    create: string
    grade: number,
}

const Card = ({id, userId, question, answer, updated, create, grade}: CardType) => {

    const [updateQuestion, UpdateQuestion] = useState<boolean>(false)
    const [updateAnswer, UpdateAnswer] = useState<boolean>(false)

    const myUserID = useAppSelector<string>(state => state.auth.user._id)

    const newQuestion = useInput(question, {minLength: 2})
    const newAnswer = useInput(answer, {minLength: 2})


    return (
        <div className={s.pack}>
            {updateQuestion && userId === myUserID
                ? <SuperInputText name={'Ava'} value={newQuestion.value}
                                  onChange={e => newQuestion.onChange(e.currentTarget.value)} autoFocus
                                  onBlur={() => UpdateQuestion(false)}/>
                : <p onDoubleClick={() => UpdateQuestion(true)} className={s.pack_block_name}>{newQuestion.value}</p>}
            {/*<p className={s.pack_block_name}>{question}</p>*/}
            {updateAnswer && userId === myUserID
                ? <SuperInputText name={'Ava'} value={newAnswer.value}
                                  onChange={e => newAnswer.onChange(e.currentTarget.value)} autoFocus
                                  onBlur={() => UpdateAnswer(false)}/>
                : <p onDoubleClick={() => UpdateAnswer(true)} className={s.pack_block_name}>{newAnswer.value}</p>}
            {/*<p className={s.pack_block_answer}>{answer}</p>*/}
            <p className={s.pack_block_update}>{updated}</p>
            <p className={s.pack_block_createdBy}>{create}</p>
            <p className={s.pack_block_createdBy}>{grade}</p>
            {userId === myUserID && <RefactorMyCard _id={id} newQuestion={newQuestion.value} newAnswer={newAnswer.value}/>}

        </div>
    )
}
export default Card