import {Dispatch} from "redux";
import {setAppErrorAC, setAppInitializeAC, toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, changeProfileAC, setTokenAC, setTokenIsSentAC, signOutAC} from "./reducers/auth-reducer";
import {signUpAC} from "./reducers/sign-up-reducer";
import {changeNumberPageAC, getPacksAC, setMaxMinNumberCardsAC, setPageCountAC} from "./reducers/packs-reducer";
import {addPacksAC, deletePackAC, updatePackAC} from "./reducers/myPacks-reducer";


export type ActionType =
    ToggleIsFetchingACType
    | authMeACType
    | signOutACType
    | changeProfileACType
    | setAppInitializeAT
    | signUpAT
    | getPacksAT
    | changeNumberPageAT
    | setMaxMinNumberCardsAT
    | setPageCountAT
    | setAppErrorAT
    | setTokenAT
    | setTokenIsSentAT
    | deletePackAT
    | addPacksAT
    | updatePackAT


export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;
export type authMeACType = ReturnType<typeof authMeAC>;
export type signOutACType = ReturnType<typeof signOutAC>;
export type changeProfileACType = ReturnType<typeof changeProfileAC>;
export type setAppInitializeAT = ReturnType<typeof setAppInitializeAC>
export type signUpAT = ReturnType<typeof signUpAC>
export type setAppErrorAT = ReturnType<typeof setAppErrorAC>
export type getPacksAT = ReturnType<typeof getPacksAC>
export type changeNumberPageAT = ReturnType<typeof changeNumberPageAC>
export type setMaxMinNumberCardsAT = ReturnType<typeof setMaxMinNumberCardsAC>
export type setPageCountAT = ReturnType<typeof setPageCountAC>
export type setTokenAT = ReturnType<typeof setTokenAC>
export type setTokenIsSentAT = ReturnType<typeof setTokenIsSentAC>


export type deletePackAT = ReturnType<typeof deletePackAC>
export type addPacksAT = ReturnType<typeof addPacksAC>
export type updatePackAT = ReturnType<typeof updatePackAC>


export type DispatchType = Dispatch<ActionType>