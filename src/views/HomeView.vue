<template>
  <main>
    <TabalbeTextarea v-model="text" />
    <pre>{{ text }}</pre>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TabalbeTextarea from '../components/TabableTextarea.vue'

let text = ref('')
</script>

<style scoped>
textarea {
  width: 400px;
  height: 200px;
  padding: 10px;
}
</style>
