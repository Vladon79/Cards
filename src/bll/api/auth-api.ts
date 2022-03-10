import axios from "axios";
import {UserType} from "../reducers/auth-reducer";

//login: nya-admin@nya.nya
//pasward: 1qazxcvBG

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authApi = {
    authMe() {
        return instance.post('/auth/me')
    },
    log() {
        return instance.post('auth/login', {email: 'nya-admin@nya.nya', password: '1qazxcvBG', rememberMe: true})
    },
    changeMe(name: string, avatar: string) {
        return instance.put('/auth/me', {
            name, avatar
        }).then(response => response.data)
    },
    signOut() {
        return instance.delete('/auth/me').then(response => response.data)
    },
    register(email: string, password: string) {
        return instance.post<RegisterResponseType>(`auth/register`, {email, password})
    },
}



type RegisterResponseType = {
    addedUser: AddedUserType
    created:string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
}

type AddedUserType = {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
}

