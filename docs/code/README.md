# 基本示例

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