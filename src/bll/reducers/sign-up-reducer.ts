import {Dispatch} from "redux";
import { authApi } from "../api/auth-api";
import {toggleIsFetchingAC} from "./app-reducer";
import {DispatchType} from "../action-dispatchTypes";



export const register = (email: string, password: string) => (dispatch: DispatchType) => {

    dispatch(toggleIsFetchingAC(true))
    authApi.register(email, password)
        .then(res => {
            /*
                dispatch(setIsLoggedInAC(true)
              */
            console.log(res)
        })
        .catch(err => {
           /* handleServerNetworkError(dispatch, err.message)*/
        })
        .finally(() => {
            dispatch(toggleIsFetchingAC(false))
        })

}
