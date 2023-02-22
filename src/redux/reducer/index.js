import * as actionType from "../action/action-type"
export default function reducer(state = 6, action) {
    if (action.type === actionType.INCREASE) {
        return state + 1
    } else if (action.type === actionType.DECREASE){
        return state - 1
    }else if(action.type === actionType.SET){
        return action.payload
    }
    return state  //如果没有返回的话，第一次传递的10是undefined
}