import {AxiosResponse} from "axios";
import {instance} from "./auth-api";


export const singInAPI = {
    singIn(data: SingInRequestType) {
        return instance.post<SingInRequestType, AxiosResponse<SingInResponseType>>("/auth/login", data)
    }
}

export type SingInRequestType = {
    email: string
    password: string
    rememberMe: boolean
}

export type SingInResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;

    error?: string;
}