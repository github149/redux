/*
 * @Descripttion: 
 * @Author: maple wang
 * @Date: 2023-02-21 17:07:42
 * @LastEditors: maple wang
 * @LastEditTime: 2023-02-22 16:10:55
 */
import {createStore} from "redux"
/**
 * reducer本质是一个普通函数,返回一个新的状态
 * @params state表示之前的仓库中的数据
 * @params action 描述要操作的什么的对象
 */

function reducer(state, action) {
    if (action.type === "increase") {
        return state + 1
    } else if (action.type === "decrease"){
        return state - 1
    }else if(action.type === "set"){
        return action.payload
    }
    return state  //如果没有返回的话，第一次传递的10是undefined
}
const store = createStore(reducer,6)
console.log(store.getState())
store.dispatch({
    type:'set',
    payload:111
})
console.log(store.getState())