import {instance} from "./auth-api";

export const packsApi = {
    getCards(cardsPerPage: number, min: number, max: number, page: number) {
        return instance.get<any>(`cards/pack`, {params: {min, max, page, pageCount: cardsPerPage}})
    },
}