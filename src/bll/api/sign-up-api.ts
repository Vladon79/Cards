import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
})


export const signUpApi = {

    register(email: string, password: string) {
        return instance.post<any>(`auth/register`, {email, password})
    },

    ping(time:number) {
return instance.post<any>(`ping`,{frontTime: time})
    }
}