import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./reducers/reducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    reducer:reducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>