import AddCard from "./AddCard/AddCard";
import UpdateCard from "./UpdateCard/UpdateCard";
import DeleteCard from "./DeleteCard/DeleteCard";
import {useAppSelector} from "../../../../bll/store";
import {selectorActiveModalCard, selectorTitleModalCard } from "../../../../bll/selectors/selectors";
import MyModalCard from "../../../common/ModalCard/MyModalCard";

type MyModalPageCardPropsType = {
    addNewCard: (question: string, answer: string) => void
    deleteCard: () => void
    updateCard: (cardId:string, newQuestion: string, newAnswer: string) => void
}

const MyModalPageCard = ({addNewCard, deleteCard, updateCard}: MyModalPageCardPropsType) => {

    const activeModalCard = useAppSelector(selectorActiveModalCard)
    const title = useAppSelector(selectorTitleModalCard)
    
    return (
        <MyModalCard activeModal={activeModalCard} title={title}>
            {activeModalCard === 'addPack' && <AddCard addNewCard={addNewCard}/>}
            {activeModalCard === 'deletePack' && <DeleteCard deleteCard={deleteCard}/>}
            {activeModalCard === 'updatePack' && <UpdateCard updateCard={updateCard}/>}
        </MyModalCard>
    )
}
export default MyModalPageCard