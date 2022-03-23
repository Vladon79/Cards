import {Dispatch} from "redux";
import {setAppErrorAC, setAppInitializeAC, toggleIsFetchingAC} from "./reducers/app-reducer";
import {authMeAC, changeProfileAC, setSentPassAC, setTokenIsSentAC, signOutAC} from "./reducers/auth-reducer";
import {signUpAC} from "./reducers/sign-up-reducer";
import {
    changeNumberPageAC,
    getPacksAC,
    searchPackAC,
    setMaxMinNumberCardsAC, setPackPreloaderAC,
    setPageCountAC, setWhosePackAC
} from "./reducers/packs-reducer";
import {addPacksAC, deletePackAC, updatePackAC} from "./reducers/myPacks-reducer";
import {changeNumberPageCardsAC, getPackItemAC, setCardsCountAC, setMaxMinGradeAC} from "./reducers/packItem-reducer";
import {savePackItemIdAC} from "./reducers/packId-reducer";
import {addNewCardAC, deleteCardAC, updateCardAC} from "./reducers/myCard-reducer";
import {addPackModalAC, deletePackModalAC, setActiveModalAC, updatePackModalAC} from "./reducers/modal-reducer";


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
    | setTokenIsSentAT
    | deletePackAT
    | addPacksAT
    | updatePackAT
    | searchPackAT
    | setPassIsSentAT

    | GetPackItemAT
    | SetMinMaxGradeAT
    | SetCardsCountAT
    | ChangeNumberPageCardsAT
    | SavePackItemIdAT
    | setWhosePackAT
    | setPackPreloaderAT

    | AddNewCardAT
    | DeleteCardAT
    | UpdateCardAT

    | setActiveModalAT
    | deletePackModalAT
    | updatePackModalAT
    | addPackModalAT

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
export type setTokenIsSentAT = ReturnType<typeof setTokenIsSentAC>
export type setPassIsSentAT = ReturnType<typeof setSentPassAC>


export type deletePackAT = ReturnType<typeof deletePackAC>
export type addPacksAT = ReturnType<typeof addPacksAC>
export type updatePackAT = ReturnType<typeof updatePackAC>
export type searchPackAT = ReturnType<typeof searchPackAC>

export type GetPackItemAT = ReturnType<typeof getPackItemAC>
export type SetMinMaxGradeAT = ReturnType<typeof setMaxMinGradeAC>
export type SetCardsCountAT = ReturnType<typeof setCardsCountAC>
export type ChangeNumberPageCardsAT = ReturnType<typeof changeNumberPageCardsAC>
export type SavePackItemIdAT = ReturnType<typeof savePackItemIdAC>
export type setWhosePackAT = ReturnType<typeof setWhosePackAC>
export type setPackPreloaderAT = ReturnType<typeof setPackPreloaderAC>


export type AddNewCardAT = ReturnType<typeof addNewCardAC>
export type DeleteCardAT = ReturnType<typeof deleteCardAC>
export type UpdateCardAT = ReturnType<typeof updateCardAC>


export type setActiveModalAT = ReturnType<typeof setActiveModalAC>
export type deletePackModalAT = ReturnType<typeof deletePackModalAC>
export type updatePackModalAT = ReturnType<typeof updatePackModalAC>
export type addPackModalAT = ReturnType<typeof addPackModalAC>


export type DispatchType = Dispatch<ActionType>

