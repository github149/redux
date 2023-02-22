import * as actionType from "./action-type"
export function getIncrease(){
    return ({
        type:actionType.INCREASE //创建一个action
    })
}
export function getDecrease(){
    return ({
        type:actionType.DECREASE
    })
}

export function getSet(payLoad){
    return ({
        type:actionType.SET,
        payLoad
    })
}