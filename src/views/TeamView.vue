<template>
  <div class="team">
    <TeamHeader />

    <TeamMembers />

    <TeamFooter />
  </div>
</template>

<script setup>
import TeamHeader from '../components/team/TeamHeader.vue'
import TeamMembers from '../components/team/TeamMembers.vue'
import TeamFooter from '../components/team/TeamFooter.vue'

import { useTeamStore } from '../stores/TeamStore.js'
let team = useTeamStore()
team.fill()
</script>

<style>
h1 {
  position: relative;
  width: fit-content;
}

h1 span {
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translatex(100%);

  display: grid;
  place-content: center;
}

table {
  background-color: #333;
  width: 100%;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
}

table th {
  font-size: 20px;
  font-weight: bold;

  padding: 10px;
}

table td {
  padding: 20px;
  border-top: 0.5px solid white;
}

.status {
  color: rgb(86, 227, 86);
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.form input {
  width: 150px;
  padding: 5px;
}
</style>
