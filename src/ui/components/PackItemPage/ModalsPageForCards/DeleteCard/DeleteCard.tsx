import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import s from './DeleteCard.module.scss'
import {useAppSelector} from "../../../../../bll/store";

type DeletePacksPropsType = {
    deleteCard: (id: string) => void
}

const DeleteCard = ({deleteCard}: DeletePacksPropsType) => {

    const id = useAppSelector<string>(state => state.modalCard.cardId)
    const question = useAppSelector<string>(state => state.modalCard.question)

    const deleteCardOnClick = () => {
        deleteCard(id)
    }


    return (
        <div className={s.delete_packs_container}>
            <p>Do you really want to remove card -<a className={s.packName}> {question}</a>?</p>
            <p>All data will be excluded from this course.</p>
            <SuperButton onClick={deleteCardOnClick} className={s.delete_button}>Delete</SuperButton>
        </div>
    )
}

export default DeleteCard