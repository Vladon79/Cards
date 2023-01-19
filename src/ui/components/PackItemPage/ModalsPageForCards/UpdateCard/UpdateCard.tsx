import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import s from './UpdateCard.module.scss';
import {useInput} from "../../../../../hooks/useInput";
import {useAppSelector} from "../../../../../bll/store";
import SearchInput from "../../../PacksListPage/Search/SearchInput";
import {selectorAnswer, selectorCardId, selectorQuestion } from "../../../../../bll/selectors/selectors";



type updateCardPropsType = {
    updateCard: (cardId:string, newQuestion: string, newAnswer: string) => void
}

const UpdateCard = ({updateCard}: updateCardPropsType) => {

    const cardId = useAppSelector(selectorCardId)
    const question = useAppSelector(selectorQuestion)
    const answer = useAppSelector(selectorAnswer)

    const newQuestion = useInput(question, [])
    const newAnswer = useInput(answer, [])

    const updateNewCard = () => {
        updateCard(cardId, newQuestion.value, newAnswer.value)
    }

    return (
        <div className={s.add_packs_container}>
            <p>New question and answer:</p>
            <SearchInput searchValue={newQuestion.value} searchOnChange={newQuestion.valueChange} placeholderProps={'Question...'}/>
            <SearchInput searchValue={newAnswer.value} searchOnChange={newAnswer.valueChange} placeholderProps={'Answer..'}/>

            <SuperButton onClick={updateNewCard}>Update Card</SuperButton>
        </div>
    )
}

export default UpdateCard