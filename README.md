<!--
 * @Descripttion: 
 * @Author: maple wang
 * @Date: 2023-02-21 14:17:25
 * @LastEditors: maple wang
 * @LastEditTime: 2023-02-22 15:25:27
-->
## redux
action reducer  store

## MVC
他是一个ui的解决方案，是用于ui关联的数据复杂程度。
**服务器端的mvc**
## 服务端渲染
环境：
1. 服务端需要响应一个完整的html路径
2. 该html仅包含所需要的数据
3. 浏览器仅承担渲染页面的作用

以上的这种方式称之为**服务端渲染**，即服务端需要完整的页面组件，一起发送给服务端。

服务器端需要处理ui中的数据，并且要将数据嵌入到页面中去，最终生成一个html响应

服务器端收到请求，将请求分配给controller
**controller**:处理请求，组装这次请求所要的数据
**model**：数据模型
**view**:用于将模型转化成视图

**前端的mvc模式**
react解决了数据到视图的问题
1. react并没有解决contoller的问题,前端的controller的处理的用户的操作，后端处理的用户请求，用户的操作场景是非常复杂的
2. 对于那些组件的框架，他们使用的单项数据流，他们使用的是单项数据流，如果需要共享数据，则需要提升到根组件（数据传递非常繁琐）
   1. 虽然可以使用上下文来提供共享数据，但对于数据的监控，容易导致调试错误的困难，以及数据还原的困难。
前端需要一个独立的数据解决方案

**Flux**
facebook提出的解决方案，它最大的历史意义，在于它引入的action的概念。
action是一个普通对象，用于描述要干嘛，action是触发数据的唯一原因。
store:表示数据仓库，用于存储共享数据。

**Redux**
在flux的基础上，引入了reducer的概念
action 通过dispatch的方式分发action,store中将传递action给reducer进行处理，reducer将得到的数据传递给store，store将数据进行保存。

## action
一、 是一个plain-object(平面对象)  不能有原型链
1. 它的__proto__指向Object.prototype
二、 action中必须有type属性，该属性用于描述操作的类型
   但是，没有对type的类型做出要求
三、 在大型项目中，由于操作的类型非常多，为了避免硬编码（hard code）,会将action的类型存放到一个或一些单独的文件中。

五、为了方便传递action,通常使用action创建函数，来创建action
   1.action创建函数应该为无副作用的纯函数
       纯函数：
       一、不能以任何形式改动参数
       二、不可以有异步操作
       三、不可以对外部函数的数据造成影响
六、为了方便action创建函数来分发action,redux提供了一个函数
```bindActionCreators```,该函数用于增强action创建函数的功能，使它不仅可以创建action,并且创建后会自动完成分发。

## Reducer
Reducer是用于改变数据的函数
1. 一个数据仓库，有且只有一个reducer,并且通常情况下，一个工程只有一个仓库，因此，一个系统只有一个reducer
2. 为了方便管理，通常会将reducer放到单独的文件夹中
3. reducer被调用的时机
   通过store.dispatch,分发一个action,此时会调用reducer
   当创建一个仓库的时候会调用reducer,可以利用这一点在reducer设置一个默认状态
4. reducer内部通常使用switch来判断type值














