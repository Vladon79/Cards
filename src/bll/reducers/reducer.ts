type StateType = {}

type ActionType = actionCreateType




export const reducer = (state: StateType = {}, action: ActionType): StateType => {
    switch (action.type) {
        case "FIRST-ACTION":
            return {...state}
        default:
            return state
    }
}

const actionCreate = () => {
    return{
        type: "FIRST-ACTION"
    }
}

type actionCreateType = ReturnType<typeof actionCreate>;