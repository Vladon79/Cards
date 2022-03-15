import {instance} from "./auth-api";
import {PackItemResponseType} from "../../bll/reducers/packItem-reducer";


export const packItemApi = {
    getCard( _id:string) {
        return instance.get<PackItemResponseType>(`/cards/card`, {params:{cardsPack_id: _id}} )
    },
}

export type PackItemRequestType = {
    cardAnswer?:string
    cardQuestion?:string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?:number
}