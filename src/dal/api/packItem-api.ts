import {instance} from "./auth-api";
import {PackItemResponseType} from "../../bll/reducers/packItem-reducer";
import {AxiosResponse} from "axios";


export const packItemApi = {
    getCard(  cardsPack_id:string, cardAnswer?:string, cardQuestion?: string, min?:number, max?:number, sortCards?:number, page?:number, pageCount?:number) {
        return instance.get<PackItemResponseType, AxiosResponse<PackItemResponseType>,PackItemRequestType >(`/cards/card`, {params:{cardAnswer,cardQuestion, cardsPack_id:cardsPack_id, min, max, sortCards, page, pageCount }} )
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