import {ActionType, DispatchType} from "../action-dispatchTypes";
import {packsApi} from "../../dal/api/packs-api";
import {getCardsTC, PackResponseType} from "./packs-reducer";


export type PacksResponseType = {
    cardPacks: PackResponseType []

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
}

export const myPacksReducer = (state: PacksResponseType = initialState, action: ActionType): PacksResponseType => {
    switch (action.type) {
        case "MY-PACKS/DELETE-PACK":
            return {...state, cardPacks: state.cardPacks.filter(c => c._id !== action.id && c)}

        default:
            return state
    }
}

export const deletePackAC = (id: string) => {
    return {
        type: "MY-PACKS/DELETE-PACK",
        id
    } as const
}

export const updatePackAC = (id: string, newName:string) => {
    return {
        type: "MY-PACKS/DELETE-PACK",
        id
    } as const
}

export const deletePackTC = (id: string) => async (dispatch: DispatchType) => {
    await packsApi.deletePack(id)
    //dispatch(deletePackAC(id))
    // @ts-ignore
    dispatch(getCardsTC())
}

export const updatePackTC = (id: string, newName:string) => async (dispatch: DispatchType) => {
    await packsApi.updatePack(id, newName)
    //dispatch(deletePackAC(id))
    // @ts-ignore
    dispatch(getCardsTC())
}
