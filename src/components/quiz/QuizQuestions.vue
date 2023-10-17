<template>
  <div>
    <h3>{{ theQuestion.title }}</h3>

    <label>
      <input type="radio" :name="`ans_${theQuestion.id}`" />
      {{ theQuestion.ans_1 }}
    </label>

    <label>
      <input type="radio" :name="`ans_${theQuestion.id}`" />
      {{ theQuestion.ans_2 }}
    </label>

    <label>
      <input type="radio" :name="`ans_${theQuestion.id}`" />
      {{ theQuestion.ans_3 }}
    </label>
  </div>
</template>

<script setup>
defineProps({
  theQuestion: Object
})
</script>

<style scoped>
div {
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: black solid 1px;
}

label {
  border: none;
  outline: none;
  padding: 3px 10px;
  margin-right: 10px;
}
</style>
