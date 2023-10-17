<template>
  <textarea
    placeholder="Type a code..."
    @keydown.tab.prevent="onTabPress"
    @input="emit('update:modelValue', $event.target.value)"
    v-text="modelValue"
  />
</template>

<script setup>
defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue'])

function onTabPress(e) {
  let textarea = e.target

  let val = textarea.value
  let start = textarea.selectionStart
  let end = textarea.selectionEnd

  textarea.value = val.substring(0, start) + '\t' + val.substring(end)

  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>
