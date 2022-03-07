import {toggleIsFetchingAC} from "./app-reducer";
import {profileAPI} from "../../dal/profile-api/profile-api";
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
    user: UserType
}

const initialState: StateType = {
    user: {
        _id: "0",
        email: "fake",
        name: "fake",
        // avatar?: string;
        publicCardPacksCount: 0,

        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false

    }

}

export const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "PROFILE/AUTH-ME":
            return {...state, user: action.user}
        default:
            return state
    }
}

export const authMeAC = (user: UserType) => {
    return {
        type: "PROFILE/AUTH-ME",
        user
    } as const
}

export const authMeTC = () => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetchingAC(true))
    const data = await profileAPI.authMe()
    dispatch(toggleIsFetchingAC(false))
    dispatch(authMeAC(data))
    console.log(data)
}