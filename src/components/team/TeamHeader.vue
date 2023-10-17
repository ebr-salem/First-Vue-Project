<template>
  <div class="header">
    <h1>
      {{ team.title }} Team<span>{{ team.members.length }}</span>
    </h1>

    <AddMember />
  </div>
</template>

<script setup>
import AddMember from '@/components/team/AddMember.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let team = useTeamStore()
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
</style>
