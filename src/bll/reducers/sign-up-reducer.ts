import {Dispatch} from "redux";
import { authApi } from "../api/auth-api";



export const signUpReducer = (state: any = {}, action: any): any => {

    switch (action.type) {

        default:
            return state
    }

}


//AC


//TC

export const register = (email: string, password: string) => (dispatch: Dispatch) => {

    //dispatch(AppLoader --> loading)
    authApi.register(email, password)
        .then(res => {
            /*
                dispatch(setIsLoggedInAC(true)
              */
        })
        .catch(err => {
           /* handleServerNetworkError(dispatch, err.message)*/
        })
        .finally(() => {
            //dispatch(AppLoader --> idle)
        })

}
//
// export const ping = (time: number) => (dispatch: Dispatch) => {
//
//     signUpApi.ping(time)
//         .then(res => {
//             console.log(res)
//         })
// }