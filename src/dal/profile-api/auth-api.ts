import axios from "axios";
import {Simulate} from "react-dom/test-utils";

//login: nya-admin@nya.nya
//pasward: 1qazxcvBG'

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const authApi = {
    authMe() {
        return instance.post('/auth/me')
    },
    ping() {
        return instance.post('/ping/', {frontTime: Date.now()}).then(response => {
        })
    },
    log() {
        return instance.post('auth/login', {email: 'nya-admin@nya.nya', password: '1qazxcvBG', rememberMe: true})
    },
    changeMe(name: string, avatar: string) {
        return instance.put('/auth/me', {
            name: name,
            avatar: avatar
        }).then(response => response.data)
    },
    signOut() {
        return instance.delete('/auth/me').then(response => response.data)
    }
}