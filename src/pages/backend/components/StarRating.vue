<script setup lang="ts">
defineProps<{
  value: number
  max?: number
}>()
</script>

<template>
  <span class="stars-display" :aria-label="`${value} / ${max ?? 5}`">
    <span
      v-for="index in max ?? 5"
      :key="index"
      class="star"
      :class="index <= value ? 'is-filled' : 'is-empty'"
    >★</span>
  </span>
</template>
