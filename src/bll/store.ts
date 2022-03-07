import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducers/reducer";
import thunkMiddleware from 'redux-thunk'
import {singInReducer} from "./reducers/singInReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const reducers = combineReducers({
    singIn: singInReducer,
    //reducer: reducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;