<template>
  <div class="test">
    <h1>What is your favorite food?</h1>
    <input v-model="food" />
    <h1>How old are you?</h1>
    <input v-model="age" />
    <button @click="clearIt">Clear Storage</button>
  </div>
</template>

<script setup>
import { UseLocalStorage } from '../composables/UseLocalStorage.js'

// returns a ref(value)
let food = UseLocalStorage('food', 'Pizza')
let age = UseLocalStorage('age', 20)

function clearIt() {
  window.localStorage.clear()
}
</script>
