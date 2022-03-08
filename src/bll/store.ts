import {applyMiddleware, combineReducers, createStore} from "redux";

import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./reducers/auth-reducer";
import {appReducer} from "./reducers/app-reducer";

const reducers = combineReducers({
    profile: authReducer,
    app: appReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducers>