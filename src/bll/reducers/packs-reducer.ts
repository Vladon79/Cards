import {ActionType, DispatchType} from "../action-dispatchTypes";
import {packsApi} from "../../dal/api/packs-api";
import {sortPacksType} from "../../ui/components/PacksListPage/PacksListPageContainer";


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
    startMaxCount: number
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
    startMaxCount: 100,
    maxCardsCount: 100,
    minCardsCount: 0,
    page: 1,
    pageCount: 4,
}

export const packsReducer = (state: PacksResponseType = initialState, action: ActionType): PacksResponseType => {
    switch (action.type) {
        case "PACKS/GET-PACKS":
            return {
                ...state,
                cardPacks: action.cardPacks,
                cardPacksTotalCount: action.totalCount,
                startMaxCount: action.maxCardsCount
            }
        case "PACKS/CHANGE-NUMBER-PACKS":
            return {...state, page: action.numberPage}
        case "PACKS/SET-MAX-MIN-CARDS":
            return {...state, minCardsCount: action.min, maxCardsCount: action.max}
        case "PACKS/SET-PAGE-COUNT":
            return {...state, pageCount: action.pageCount}
        case "PACKS/SEARCH-PACK":
            return {
                ...state, cardPacks: state.cardPacks.filter(c => c.name.includes(action.value) && c
                )
            }
        default:
            return state
    }
}

export const getPacksAC = (cardPacks: PackResponseType [], totalCount: number, maxCardsCount: number) => {
    return {
        type: "PACKS/GET-PACKS",
        cardPacks, totalCount, maxCardsCount
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

export const searchPackAC = (value: string) => {
    return {
        type: "PACKS/SEARCH-PACK",
        value
    } as const
}


export const getCardsTC = (pack: 'myPack' | 'allPack',
                           packName?: string,
                           cardPacksTotalCount?: number,
                           min?: number, max?: number,
                           sortPacks?: sortPacksType,
                           page?: number, user_id?: string) =>
    async (dispatch: DispatchType) => {

        if (pack === 'myPack') {
            // debugger
            // dispatch(toggleIsFetchingAC(true))
            const res = await packsApi.getCards(cardPacksTotalCount, packName, min, max, sortPacks, page, user_id)
            //dispatch(toggleIsFetchingAC(false))
            try {
                dispatch(getPacksAC(res.data.cardPacks, res.data.cardPacksTotalCount, res.data.maxCardsCount))
            } catch (e) {

            } finally {
                //dispatch(toggleIsFetchingAC(false))
                //
            }


        } else if (pack === 'allPack') {
            //dispatch(toggleIsFetchingAC(true))
            const res = await packsApi.getCards(cardPacksTotalCount, packName, min, max, sortPacks, page)
            try {
                dispatch(getPacksAC(res.data.cardPacks, res.data.cardPacksTotalCount, res.data.maxCardsCount))

            } catch (e) {

            } finally {
                // dispatch(toggleIsFetchingAC(false))
            }

        }

    }
