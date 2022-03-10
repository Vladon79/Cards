import {Dispatch} from "react";
import {setAppInitializeAC, toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, changeProfileAC, signOutAC} from "./reducers/auth-reducer";
import {signUpAC} from "./reducers/sign-up-reducer";


export type ActionType = ToggleIsFetchingACType
    | authMeACType
    | signOutACType
    | changeProfileACType
    | setAppInitializeAT
    | signUpAT

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;

export type authMeACType = ReturnType<typeof authMeAC>;
type signOutACType = ReturnType<typeof signOutAC>;

type changeProfileACType = ReturnType<typeof changeProfileAC>;

export type setAppInitializeAT = ReturnType<typeof setAppInitializeAC>

export type signUpAT = ReturnType<typeof signUpAC>

export type DispatchType = Dispatch<ActionType>