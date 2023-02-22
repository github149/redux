import * as actionType from "../action/action-type"
export default function reducer(state = 6, action) {
    switch (action.type) {
        case actionType.INCREASE:
            return state + 1
        case actionType.DECREASE:
            return state - 1
        case actionType.SET:
            return action.payload
        default:
           return state
    }
}