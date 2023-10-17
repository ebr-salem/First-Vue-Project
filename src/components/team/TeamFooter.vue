<template>
  <div class="footer">
    <p v-if="team.isRemaining">There are no remaining spots</p>
  </div>
</template>

<script setup>
import { useTeamStore } from '@/stores/TeamStore.js'

let team = useTeamStore()
</script>

<style scoped>
.footer {
  margin-top: 20px;
}
</style>
