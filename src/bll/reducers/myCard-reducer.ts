import {ActionType, DispatchType} from "../action-dispatchTypes";
import {PackItemType} from "./packItem-reducer";
import {packItemApi} from "../../dal/api/packItem-api";


export type CardsResponseType = {
    cards: PackItemType []
}

const initialState = {
    cards: [
        {
            answer: "no answer",
            question: "no question",
            cardsPack_id: "5eb6a2f72f849402d46c6ac4",
            grade: 4.987525071790364,
            shots: 1,
            user_id: "142151531535151",
            created: "2020-05-13T11:05:44.867Z",
            updated: "2020-05-13T11:05:44.867Z",
            _id: "5ebbd48876810f1ad0e7ece3",
        }
    ]
}

export const myCardReducer = (state: CardsResponseType = initialState, action: ActionType): CardsResponseType => {
    switch (action.type) {

         case "MY-CARDS/ADD-CARD":
             return {...state, cards: [...state.cards, action.newCard]}
        case "MY-CARDS/DELETE-CARD":
             return {...state, cards: state.cards.filter(c => c._id !== action.id && c)}
         case "MY-CARDS/UPDATE-CARD":
             return {...state, cards: state.cards.filter(c => action.id === c._id && action.updateCard)}

        default:
            return state
    }
}



export const addNewCardAC = (newCard: PackItemType) => {
    return {
        type: "MY-CARDS/ADD-CARD",
        newCard
    } as const
}

export const deleteCardAC = (id: string) => {
    return {
        type: "MY-CARDS/DELETE-CARD",
        id
    } as const
}

export const updateCardAC = (id: string, updateCard: PackItemType) => {
    return {
        type: "MY-CARDS/UPDATE-CARD",
        id, updateCard
    } as const
}



export const addNewCardTC = (cardsPack_id:string, question:string, answer:string) => (dispatch: DispatchType) => {
   packItemApi.postCard(cardsPack_id, question, answer)
       .then(res => {
           dispatch(addNewCardAC(res.data))

       })
       .catch( error => {

       })
}

export const deleteCardTC = (id: string) =>  (dispatch: DispatchType) => {
    packItemApi.deleteCard(id)
        .then(res=>{
            dispatch(deleteCardAC(id))
        })
        .catch(error => {

        })
}

export const updateCardTC = (id: string, newQuestion: string, newAnswer:string) =>  (dispatch: DispatchType) => {
packItemApi.updateCard(id, newQuestion, newAnswer )
    .then((res)=>{
        dispatch(updateCardAC(id, res.data))
    })
    .catch((error)=>{

    })

}
