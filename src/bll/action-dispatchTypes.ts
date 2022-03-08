import {Dispatch} from "react";
import {toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, deleteMeAC} from "./reducers/auth-reducer";
import {changeProfileAC} from "./reducers/profile-reducer";

export type ActionType = ToggleIsFetchingACType
    | authMeACType
    | deleteMeACType
    | changeProfileACType

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;

type authMeACType = ReturnType<typeof authMeAC>;
type deleteMeACType = ReturnType<typeof deleteMeAC>;

type changeProfileACType = ReturnType<typeof changeProfileAC>;


export type DispatchType = Dispatch<ActionType>