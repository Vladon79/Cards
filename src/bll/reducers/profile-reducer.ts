import {toggleIsFetchingAC} from "./app-reducer";
import {authApi} from "../../dal/profile-api/auth-api";
import {ActionType, DispatchType} from "../action-dispatchTypes";


export type UserProfileType = {
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number;
}

type StateType = {
    user: UserProfileType
}

const initialState: StateType = {
    user: {
        email: "fake",
        name: "fake",
        avatar: '',
        publicCardPacksCount: 0,
    }

}

export const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "PROFILE/CHANGE-PROFILE":
            return {...state, user: {...state.user, name: action.name, avatar: action.avatar}}

        default:
            return state
    }
}

export const changeProfileAC = (name: string, avatar: string) => {
    return {
        type: "PROFILE/CHANGE-PROFILE",
        name, avatar
    } as const
}


export const changeProfileTC = (name: string, avatar: string) => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetchingAC(true))
    await authApi.changeMe(name, avatar)
    changeProfileAC(name, avatar)
    dispatch(toggleIsFetchingAC(false))
}


