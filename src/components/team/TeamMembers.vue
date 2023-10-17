<template>
  <table>
    <tr>
      <th>name</th>
      <th>e-mail</th>
      <th>status</th>
    </tr>

    <TeamMemberItem v-for="member in team.members" :key="member.id" :member="member" />
  </table>
</template>

<script setup>
import TeamMemberItem from './TeamMemberItem.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let team = useTeamStore()
</script>
