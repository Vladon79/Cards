import {singInAPI, SingInRequestType} from "../../api/signIn-api";
import {Dispatch} from "redux";

const initialState = {
    isSingIn: false
}
type InitialStateType = typeof initialState

export const singInReducer = (state: InitialStateType = initialState, action: SingInAT): InitialStateType => {
    switch (action.type) {
        case 'SET-IS-SING-IN':
            return {...state, isSingIn: action.value}
        default:
            return state
    }
}

export const singInAC = (value: boolean) => {
    return {
        type: 'SET-IS-SING-IN',
        value
    } as const
}

export type SingInAT = ReturnType<typeof singInAC>

export const singInTC = (data: SingInRequestType) =>
    (dispatch: Dispatch<SingInAT>) => {
        singInAPI.singIn(data)
            .then((res) => {
                if (res.data._id !== null) {
                    dispatch(singInAC(true))
                    //dispatch() // need action for profile
                }
            })
            .catch((e) => {
                const error = e.reponse
                    ? e.reponse.data.error
                    : (e.message + ',more details in the console')
            })

    }