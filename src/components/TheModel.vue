<template>
  <Transition name="model">
    <div class="model-mask" v-if="show">
      <div class="model-container">
        <div>
          <slot />
        </div>

        <footer>
          <button @click="emit('close')">
            <slot name="footer" />
          </button>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean
})

let emit = defineEmits(['close'])
</script>

<style scoped>
.model-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}

.model-container {
  width: 50vw;
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 6px;
}

footer {
  border-top: 2px solid #ddd;
  margin-top: 30px;
  padding: 5px;
}

button {
  padding: 5px 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: #ddd;
}

button:hover {
  background: #ababab;
}

/* Transitions section */
/* .model-enter-from,
.model-leave-to {
  opacity: 0;
  transform: scale(1.2);
}

.model-leave-from,
.model-enter-to {
  opacity: 1;
} */
.model-enter-active {
  /* transition: 0.2s; */
  animation: fade 0.3s;
}

.model-leave-active {
  animation: fade 0.2s reverse;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
  }
}
</style>
