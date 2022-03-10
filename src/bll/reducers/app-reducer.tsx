import {ActionType} from "../action-dispatchTypes";

type StateType = {
    isFetching: boolean
    isInitialized: boolean
}

const initialState: StateType = {
    isFetching: false,
    isInitialized: false
}

export const appReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "APP/TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "APP/TOGGLE-IS-FETCHING",
        isFetching
    } as const
}


