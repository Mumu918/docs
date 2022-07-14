<template>
  <div>{{ counter }}</div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
setInterval(() => {
  counter.value++
}, 500)
</script>
