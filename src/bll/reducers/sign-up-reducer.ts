import {Dispatch} from "redux";
import {signUpApi} from "../api/sign-up-api";


export const signUpReducer = (state: any = {}, action: any): any => {

    switch (action.type) {

        default:
            return state
    }

}


//AC


//TC

export const register = (email: string, password: string) => (dispatch: Dispatch) => {

    signUpApi.register(email, password)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

}

export const ping = (time: number) => (dispatch: Dispatch) => {

    signUpApi.ping(time)
        .then(res=> {
            console.log(res)
        })
}