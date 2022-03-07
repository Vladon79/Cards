import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from 'redux-thunk'
import {profileReducer} from "./reducers/profile-reducer";
import {appReducer} from "./reducers/app-reducer";

const reducers = combineReducers({
    profile: profileReducer,
    app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof reducers>