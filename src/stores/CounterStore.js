import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 1
    }
  },

  actions: {
    increase() {
      this.count++
    }
  }
})
