import {ActionType} from "../action-dispatchTypes";
import {Dispatch} from "redux";
import {packsApi} from "../../dal/api/packs-api";

export type PackResponseType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: any
    updated: any
    user_name: string
}

export type PacksResponseType = {
    cardPacks: PackResponseType []
    cardPacksTotalCount: number
    // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number// выбранная страница
    pageCount: number
}

const initialState = {
    cardPacks: [
        {
            _id: "5eb6cef840b7bf1cf0d8122d",
            user_id: "5eb543f6bea3ad21480f1ee7",
            name: "no Name",
            cardsCount: 25,
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
            user_name: 'vlad'
        },
    ],
    cardPacksTotalCount: 14,
    // количество колод
    maxCardsCount: 4,
    minCardsCount: 0,
    page: 1,// выбранная страница
    pageCount: 4,
}

export const packsReducer = (state: PacksResponseType = initialState, action: ActionType): PacksResponseType => {
    switch (action.type) {
        case "PACKS/GET-PACKS":
            return action.packs
        case "PACKS/CHANGE-NUMBER-PACKS":
            console.log(action.numberPage)
            return {...state, page:action.numberPage}

        default:
            return state
    }
}

export const getPacksAC = (packs: PacksResponseType) => {
    return {
        type: "PACKS/GET-PACKS",
        packs
    } as const
}

export const changeNumberPageAC = (numberPage: number) => {
    return {
        type: "PACKS/CHANGE-NUMBER-PACKS",
        numberPage
    } as const
}


export const getCardsTC = (cardsPerPage: number, min: number, max: number, page:number) => (dispatch: Dispatch) => {
    // dispatch(toggleIsFetchingAC(true))
    packsApi.getCards(cardsPerPage, min, max, page )
        .then(res => {
            dispatch(getPacksAC(res.data))
        })
        .catch(() => {
            return
        })
        .finally(() => {
            // dispatch(setAppInitializeAC(true))
            // dispatch(toggleIsFetchingAC(false))
        })
}
