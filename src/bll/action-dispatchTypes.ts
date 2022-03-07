import {Dispatch} from "react";
import {toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC} from "./reducers/profile-reducer";

export type ActionType = ToggleIsFetchingACType  | authMeACType

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;

type authMeACType = ReturnType<typeof authMeAC>;

export type DispatchType = Dispatch<ActionType>