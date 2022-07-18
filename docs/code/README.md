# 介绍
Pinia [最初是在 2019 年 11 月左右重新设计使用 Composition API](http://zhongguose.com/) 。从那时起，最初的原则仍然相同，但 Pinia 对 Vue 2 和 Vue 3 都有效，并且不需要您使用组合 API。 除了安装和 SSR 之外，两者的 API 都是相同的，并且这些文档针对 Vue 3，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！

## 基本示例

这就是使用 pinia 在 API 方面的样子（请务必查看 Getting Started 以获取完整说明）。 您首先创建一个 Store ：
``` typescript{10-13}
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
```

## 为什么要使用 Pinia？
Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 export const state = reactive({}). 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，会使您的应用程序暴露于安全漏洞。 但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处
* dev-tools 支持
  - 跟踪动作、突变的时间线
  - Store 出现在使用它们的组件中
  - time travel 和 更容易的调试
* 热模块更换
  - 在不重新加载页面的情况下修改您的 Store
  - 在开发时保持任何现有状态
* 插件：使用插件扩展 Pinia 功能
* 为 JS 用户提供适当的 TypeScript 支持或 autocompletion
* 服务器端渲染支持

## 为什么是 Pinia
Pinia（发音为 /piːnjʌ/，类似于英语中的“peenya”）是最接近有效包名 piña（西班牙语中的_pineapple_）的词。 菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。 与 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。 它也是一种美味的热带水果，原产于南美洲。
:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

## 一个更现实的例子
这是一个更完整的 API 示例，您将与 Pinia 一起使用即使在 JavaScript 中也具有类型。 对于某些人来说，这可能足以在不进一步阅读的情况下开始使用，但我们仍然建议您查看文档的其余部分，甚至跳过此示例，并在阅读完所有_核心概念_后返回。
``` js
import { defineStore } from 'pinia'

export const todos = defineStore('todos', {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: 'all',
    // type 会自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动完成! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === 'finished') {
        // 自动调用其他 getter ✨
        return this.finishedTodos
      } else if (this.filter === 'unfinished') {
        return this.unfinishedTodos
      }
      return this.todos
    },
  },
  actions: {
    // 任何数量的参数，返回一个 Promise 或者不返回
    addTodo(text) {
      // 你可以直接改变状态
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```


