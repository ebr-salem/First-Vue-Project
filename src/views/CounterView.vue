<template>
  <div class="counter">
    <h1>Counter</h1>
    <h2>{{ counter.count }}</h2>
    <button @click="counter.increase">Increase</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/CounterStore.js'

let counter = useCounterStore()
</script>
