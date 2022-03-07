import axios from "axios";

//login: nya-admin@nya.nya
//pasward: 1qazxcvBG'

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const profileAPI = {
    authMe() {
        return instance.post('/auth/me').then(response => response.data)
    },
    ping() {
        return instance.post('/ping/', {frontTime: Date.now()}).then(response => {
            console.log(response)
        })
    },
    reg() {
        return instance.post('auth/login', {email: 'nya-admin@nya.nya', password: '1qazxcvBG', rememberMe: true})
    }
}