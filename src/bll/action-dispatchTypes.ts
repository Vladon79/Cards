import {Dispatch} from "react";
import {toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, changeProfileAC, signOutAC} from "./reducers/auth-reducer";


export type ActionType = ToggleIsFetchingACType
    | authMeACType
    | signOutACType
    | changeProfileACType

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;

export type authMeACType = ReturnType<typeof authMeAC>;
type signOutACType = ReturnType<typeof signOutAC>;

type changeProfileACType = ReturnType<typeof changeProfileAC>;


export type DispatchType = Dispatch<ActionType>