import {instance} from "./auth-api";

export const packsApi = {
    getCards(cardPacksTotalCount: number, min: number, max: number, page: number) {
        return instance.get<any>(`cards/pack`, {params: {min, max, page, pageCount: cardPacksTotalCount}})
    },
}