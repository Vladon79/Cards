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
    cardPacksTotalCount: number// количество колод
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
    maxCardsCount: 100,
    minCardsCount: 0,
    page: 1,// выбранная страница
    pageCount: 4,
}

export const packsReducer = (state: PacksResponseType = initialState, action: ActionType): PacksResponseType => {
    switch (action.type) {
        case "PACKS/GET-PACKS":
            return {...state, cardPacks: action.cardPacks, cardPacksTotalCount: action.totalCount}
        case "PACKS/CHANGE-NUMBER-PACKS":
            return {...state, page: action.numberPage}
        case "PACKS/SET-MAX-MIN-CARDS":
            return {...state, minCardsCount: action.min, maxCardsCount: action.max}
        case "PACKS/SET-PAGE-COUNT":
            return {...state, pageCount: action.pageCount}
        default:
            return state
    }
}

export const getPacksAC = (cardPacks: PackResponseType [], totalCount: number) => {
    return {
        type: "PACKS/GET-PACKS",
        cardPacks, totalCount
    } as const
}

export const changeNumberPageAC = (numberPage: number) => {
    return {
        type: "PACKS/CHANGE-NUMBER-PACKS",
        numberPage
    } as const
}

export const setMaxMinNumberCardsAC = (min: number, max: number) => {
    return {
        type: "PACKS/SET-MAX-MIN-CARDS",
        max, min
    } as const
}
export const setPageCountAC = (pageCount: number) => {
    return {
        type: "PACKS/SET-PAGE-COUNT",
        pageCount
    } as const
}

export const addNewPackTC = (name: string, privateBoolean: boolean) => (dispatch: Dispatch) => {
    packsApi.addPack(name, privateBoolean)
        .then(res => {

        })
        .catch(() => {
            return
        })
        .finally(() => {
            // dispatch(setAppInitializeAC(true))
            // dispatch(toggleIsFetchingAC(false))
        })
}


export const getCardsTC = (cardPacksTotalCount?: number, min?: number, max?: number, page?: number, user_id?: string) => (dispatch: Dispatch) => {
    packsApi.getCards(cardPacksTotalCount, min, max, page, user_id)
        .then(res => {
            dispatch(getPacksAC(res.data.cardPacks, res.data.cardPacksTotalCount))
        })
        .catch(() => {
            return
        })
        .finally(() => {
            // dispatch(setAppInitializeAC(true))
            // dispatch(toggleIsFetchingAC(false))
        })
}
