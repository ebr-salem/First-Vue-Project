<template>
  <tr>
    <td v-text="member.name"></td>
    <td v-text="member.email"></td>
    <td class="status" v-text="member.status"></td>
  </tr>
</template>

<script setup>
defineProps({
  member: Object
})
</script>
