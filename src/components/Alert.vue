<script setup>
defineProps({
  message: {
    type: String
  },
  error: {
    type: Boolean
  }
})
</script>

<template>
  <p class="alert" :class="error ? 'error-true' : 'error-false'">{{ message }}</p>
</template>