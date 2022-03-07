import {ActionType} from "../action-dispatchTypes";

type StateType = {
    isFetching: boolean
}

const initialState: StateType = {
    isFetching: true
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

