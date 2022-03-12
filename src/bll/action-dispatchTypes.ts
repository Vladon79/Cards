import {Dispatch} from "react";
import {setAppInitializeAC, toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, changeProfileAC, signOutAC} from "./reducers/auth-reducer";
import {signUpAC} from "./reducers/sign-up-reducer";
import {changeNumberPageAC, getPacksAC, setMaxMinNumberCardsAC, setPageCountAC} from "./reducers/packs-reducer";


export type ActionType = ToggleIsFetchingACType
    | authMeACType
    | signOutACType
    | changeProfileACType
    | setAppInitializeAT
    | signUpAT
    | getPacksAT
    | changeNumberPageAT
    | setMaxMinNumberCardsAT
    | setPageCountAT

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;

export type authMeACType = ReturnType<typeof authMeAC>;
type signOutACType = ReturnType<typeof signOutAC>;

type changeProfileACType = ReturnType<typeof changeProfileAC>;

export type setAppInitializeAT = ReturnType<typeof setAppInitializeAC>

export type signUpAT = ReturnType<typeof signUpAC>


export type getPacksAT = ReturnType<typeof getPacksAC>
export type changeNumberPageAT = ReturnType<typeof changeNumberPageAC>
export type setMaxMinNumberCardsAT = ReturnType<typeof setMaxMinNumberCardsAC>
export type setPageCountAT = ReturnType<typeof setPageCountAC>

export type DispatchType = Dispatch<ActionType>