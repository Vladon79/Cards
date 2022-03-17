import {Dispatch} from "react";
import {setAppInitializeAC, toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, changeProfileAC, signOutAC} from "./reducers/auth-reducer";
import {signUpAC} from "./reducers/sign-up-reducer";
import {changeNumberPageAC, getPacksAC, setMaxMinNumberCardsAC, setPageCountAC} from "./reducers/packs-reducer";
import {addPacksAC, deletePackAC, updatePackAC} from "./reducers/myPacks-reducer";
import {changeNumberPageCardsAC, getPackItemAC, setCardsCountAC, setMaxMinGradeAC} from "./reducers/packItem-reducer";
import {savePackItemIdAC} from "./reducers/packId-reducer";
import {addNewCardAC, deleteCardAC, updateCardAC} from "./reducers/myCard-reducer";


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
    | deletePackAT
    | addPacksAT
    | updatePackAT

    | GetPackItemAT
    | SetMinMaxGradeAT
    | SetCardsCountAT
    | ChangeNumberPageCardsAT
    | SavePackItemIdAT

    | AddNewCardAT
    | DeleteCardAT
    | UpdateCardAT

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


export type deletePackAT = ReturnType<typeof deletePackAC>
export type addPacksAT = ReturnType<typeof addPacksAC>
export type updatePackAT = ReturnType<typeof updatePackAC>

export type GetPackItemAT = ReturnType<typeof getPackItemAC>
export type SetMinMaxGradeAT = ReturnType<typeof setMaxMinGradeAC>
export type SetCardsCountAT = ReturnType<typeof setCardsCountAC>
export type ChangeNumberPageCardsAT = ReturnType<typeof changeNumberPageCardsAC>
export type SavePackItemIdAT = ReturnType<typeof savePackItemIdAC>


export type AddNewCardAT = ReturnType<typeof addNewCardAC>
export type DeleteCardAT = ReturnType<typeof deleteCardAC>
export type UpdateCardAT = ReturnType<typeof updateCardAC>


export type DispatchType = Dispatch<ActionType>

