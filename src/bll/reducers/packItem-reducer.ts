import {ActionType} from "../action-dispatchTypes";
import {Dispatch} from "redux";
import {packItemApi} from "../../dal/api/packItem-api";
import {toggleIsFetchingAC} from "./app-reducer";

export type PackItemType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type PackItemResponseType = {
    cards: PackItemType []
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string

}

const initialState: PackItemResponseType = {
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
        },
    ],
    cardsTotalCount: 3,
    maxGrade: 6,
    minGrade: 0,
    page: 1,
    pageCount: 10,
    packUserId: "5eecf82a3ed8f700042f1186",
}


export const packItemReducer = (state: PackItemResponseType = initialState, action: ActionType): PackItemResponseType => {
    switch (action.type) {
        case "PACK-ITEM/GET-CARD":
            return action.packItem
        case "PACK-ITEM/SET-MAX-MIN-GRADE":
            return {...state, minGrade: action.min, maxGrade: action.max}
        case "PACK-ITEM/SET-CARDS-COUNT":
            return {...state, pageCount: action.cardsCount}
        case  "PACK-ITEM/CHANGE-NUMBER-CARDS":
            return {...state, page: action.numberPage}
        default:
            return state
    }
}

export const getPackItemAC = (packItem: PackItemResponseType) => {
    return {
        type: "PACK-ITEM/GET-CARD",
        packItem
    } as const
}

export const setMaxMinGradeAC = (min: number, max: number) => {
    return {
        type: "PACK-ITEM/SET-MAX-MIN-GRADE",
        max, min
    } as const
}

export const setCardsCountAC = (cardsCount: number) => {
    return {
        type: "PACK-ITEM/SET-CARDS-COUNT",
        cardsCount
    } as const
}

export const changeNumberPageCardsAC = (numberPage: number) => {
    return {
        type: "PACK-ITEM/CHANGE-NUMBER-CARDS",
        numberPage
    } as const
}


export const getPackItemTC = (cardsPack_id:string,  page?:number, pageCount?:number,cardAnswer?:string, cardQuestion?: string,  min?:number, max?:number, sortCards?:number,) => (dispatch: Dispatch) => {
    // dispatch(toggleIsFetchingAC(true))
    packItemApi.getCard( cardsPack_id, cardAnswer, cardQuestion,  min, max, sortCards, page, pageCount  )
        .then(res => {
            dispatch(getPackItemAC(res.data))
                 })
        .catch(() => {
            return
        })
        .finally(() => {
            // dispatch(toggleIsFetchingAC(false))
        })
}
