import {instance} from "./auth-api";
import {PackItemResponseType, PackItemType} from "../../bll/reducers/packItem-reducer";
import {AxiosResponse} from "axios";


export const packItemApi = {
    getCard(  cardsPack_id:string, cardAnswer?:string, cardQuestion?: string, min?:number, max?:number, sortCards?:number, page?:number, pageCount?:number) {
        return instance.get<PackItemResponseType, AxiosResponse<PackItemResponseType>,PackItemRequestType >(`/cards/card`, {params:{cardAnswer,cardQuestion, cardsPack_id:cardsPack_id, min, max, sortCards, page, pageCount }} )
    },
    postCard(cardsPack_id:string, question?: string, answer?:string,grade?:number, shots?:number, answerImg?:string, questionImg?:string, questionVideo?:string, answerVideo?:string ) {
        return instance.post<PackItemType, AxiosResponse<PackItemType>,PostCardRequestType >('/cards/card',{card:{cardsPack_id, question, answer,grade, shots, answerImg, questionImg, questionVideo, answerVideo}})
    },
    deleteCard(id:string){
        return instance.delete( `/cards/card?id=${id}`)
    },
    updateCard(id:string, newQuestion:string, newAnswer:string) {
        return instance.put('/cards/card', {card:{_id:id, question: newQuestion, answer:newAnswer}})
    }
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

export type PostCardRequestType = {
    card: {
        cardsPack_id: string
        question?: string
        answer?: string
        grade?: number
        shots?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
    }
}