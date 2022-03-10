import axios, {AxiosResponse} from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    withCredentials:true,
})

export const singInAPI = {
    singIn (data:SingInRequestType) {
        return instance.post<SingInRequestType, AxiosResponse<SingInResponseType>>("/auth/login", data)
    }
}

export type SingInRequestType = {
    email: string
    password:string
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