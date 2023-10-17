<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>The current count in counter is {{ counter.count }}</h1>
    <button @click="counter.increase">Increase</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/CounterStore.js'

let counter = useCounterStore()
</script>
