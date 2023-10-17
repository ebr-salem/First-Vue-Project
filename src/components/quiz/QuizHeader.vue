<template>
  <div class="quiz-header">
    <h1>{{ quiz.name }}</h1>
    <button @click="quiz.changeName">Change Name</button>
    <p>This is your quiz, good luck</p>
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/QuizStores.js'

let quiz = useQuizStore()
</script>
