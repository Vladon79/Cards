import { ModalType } from "../reducers/modal-reducer";
import { modalCardReducerType } from "../reducers/modalCard-reducer";
import {AppRootStateType} from "../store";

export const selectorIsInitialized = (state:AppRootStateType):boolean => state.app.isInitialized
export const selectorFetching = (state:AppRootStateType):boolean => state.app.isFetching
export const selectorIsAuth = (state:AppRootStateType):boolean => state.auth.isAuth

export const selectorMyUserId = (state:AppRootStateType):string => state.auth.user._id

export const selectorModalCard = (state:AppRootStateType):modalCardReducerType => state.modalCard
export const selectorTitleModalCard = (state:AppRootStateType):string => state.modalCard.title
export const selectorActiveModalCard = (state:AppRootStateType):ModalType => state.modalCard.activeModalCard
export const selectorCardId = (state:AppRootStateType):string => state.modalCard.cardId
export const selectorQuestion = (state:AppRootStateType):string => state.modalCard.question
export const selectorAnswer = (state:AppRootStateType):string => state.modalCard.answer