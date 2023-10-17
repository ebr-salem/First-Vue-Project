<template>
  <button :disabled="team.isRemaining" @click="showModel = true">
    Add Member - {{ team.remainingSpots }} Remaining
  </button>

  <Teleport to="body">
    <TheModel :show="showModel" @close="showModel = false">
      <p>Add Member:</p>
      <div class="form">
        <input v-model="team.theName" placeholder="Name..." />
        <input v-model="team.theEmail" placeholder="Email..." />
        <input v-model="team.theStatus" placeholder="Status..." />

        <button @click="addMember">Add</button>
      </div>

      <template #footer>close</template>
    </TheModel>
  </Teleport>
</template>

<script setup>
import TheModel from '../TheModel.vue'
import { useTeamStore } from '@/stores/TeamStore.js'
import { ref } from 'vue'

let team = useTeamStore()

let showModel = ref(false)

function addMember() {
  team.addNewMember(team.theName, team.theEmail, team.theStatus)

  showModel.value = false
}
</script>

<style scoped>
.header button {
  background-color: rgb(86, 227, 86);
  border: none;
  outline: none;
  cursor: pointer;
}

.header button:disabled {
  background-color: none;
  cursor: initial;
}
</style>
