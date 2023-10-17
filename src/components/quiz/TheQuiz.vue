<template>
  <QuizHeader />

  <div class="quiz-questions">
    <QuizQuestions v-for="question in quiz.questions" :key="question.id" :theQuestion="question" />
  </div>

  <QuizFooter />
</template>

<script setup>
import QuizHeader from './QuizHeader.vue'
import QuizQuestions from './QuizQuestions.vue'
import QuizFooter from './QuizFooter.vue'

import { useQuizStore } from '@/stores/QuizStores.js'

let quiz = useQuizStore()
</script>

<style scoped>
.quiz-questions {
  background-color: #bbb;
  color: black;
  min-height: 300px;
  padding: 5px 10px;
  margin: 10px 0;
}
</style>
