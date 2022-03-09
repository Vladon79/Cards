import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./reducers/auth-reducer";
import {appReducer} from "./reducers/app-reducer";
import {singInReducer} from "./reducers/singInReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    singIn: singInReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;