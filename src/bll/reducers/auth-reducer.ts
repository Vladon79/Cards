import {toggleIsFetchingAC} from "./app-reducer";
import {authApi} from "../../dal/profile-api/auth-api";
import {ActionType, DispatchType} from "../action-dispatchTypes";


export type UserType = {
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

type StateType = {
    isAuth: boolean
    user: UserType
}

const initialState: StateType = {
    isAuth: false,
    user: {
        _id: "0",
        email: "fake",
        name: "fake",
        avatar: '',
        publicCardPacksCount: 0,

        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false

    }

}

export const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "AUTH/AUTH-ME":
            return {...state, user: action.user, isAuth: true}
        case "AUTH/DELETE-ME":
            return {...state, isAuth: false}
        default:
            return state
    }
}

export const authMeAC = (user: UserType) => {
    return {
        type: "AUTH/AUTH-ME",
        user
    } as const
}

export const deleteMeAC = () => {
    return {
        type: "AUTH/DELETE-ME",
    } as const
}

export const authMeTC = () => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetchingAC(true))
    try {
        const res = await authApi.authMe()
        console.log(res)
        dispatch(authMeAC(res.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        console.log(error)
    }
    dispatch(toggleIsFetchingAC(false))
}

export const deleteMeTC = () => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetchingAC(true))
    await authApi.delete()
    dispatch(deleteMeAC())
    dispatch(toggleIsFetchingAC(false))
}


