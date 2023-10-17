<template>
  <div class="quiz-footer">
    <h1>Quuiz Footer</h1>
    <h3>{{ quiz.name }}</h3>
    <h3>The number of questions is {{ `(${quiz.questionsNumber})` }}</h3>
    <div class="add-question">
      <input v-model="quiz.title" placeholder="quistoin..." />
      <br />
      <input v-model="quiz.ans_1" placeholder="ans 1" />
      <input v-model="quiz.ans_2" placeholder="ans 2" />
      <input v-model="quiz.ans_3" placeholder="ans 3" />
    </div>
    <button @click="quiz.addQuestion(quiz.title, quiz.ans_1, quiz.ans_2, quiz.ans_3)">
      Add Question
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/QuizStores.js'

let quiz = useQuizStore()
</script>
