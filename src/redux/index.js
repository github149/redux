/*
 * @Descripttion: 
 * @Author: maple wang
 * @Date: 2023-02-21 17:07:42
 * @LastEditors: maple wang
 * @LastEditTime: 2023-02-22 17:06:32
 */
import {createStore,bindActionCreators} from "redux"
/**
 * reducer本质是一个普通函数,返回一个新的状态
 * @params state表示之前的仓库中的数据
 * @params action 描述要操作的什么的对象
 */

import * as createAction from "./action/createAction"
import reducer from './reducer'
const store = createStore(reducer)
console.log(store.getState())
const bindAction = bindActionCreators(createAction,store.dispatch)
bindAction.getSet(666)
console.log(store.getState())