/*
 * @Descripttion: 
 * @Author: maple wang
 * @Date: 2023-02-21 17:07:42
 * @LastEditors: maple wang
 * @LastEditTime: 2023-02-22 16:52:55
 */
import {createStore,bindActionCreators} from "redux"
/**
 * reducer本质是一个普通函数,返回一个新的状态
 * @params state表示之前的仓库中的数据
 * @params action 描述要操作的什么的对象
 */
import * as actionType from "./action/action-type"
import * as createAction from "./action/createAction"
function reducer(state, action) {
    if (action.type === actionType.INCREASE) {
        return state + 1
    } else if (action.type === actionType.DECREASE){
        return state - 1
    }else if(action.type === actionType.SET){
        return action.payload
    }
    return state  //如果没有返回的话，第一次传递的10是undefined
}
const store = createStore(reducer,6)
console.log(store.getState())
const bindAction = bindActionCreators(createAction,store.dispatch)
bindAction.getSet(666)
console.log(store.getState())