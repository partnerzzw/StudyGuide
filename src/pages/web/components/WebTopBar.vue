<script setup lang="ts">
defineProps<{
  progress: number
}>()
</script>

<template>
  <header class="top-bar">
    <h2>前端技术栈学习指南</h2>
    <div class="progress-wrap" aria-label="学习进度">
      <span>阅读进度</span>
      <div class="progress-bar-outer">
        <div class="progress-bar-inner" :style="{ width: `${progress}%` }"></div>
      </div>
      <span class="progress-text">{{ progress }}%</span>
    </div>
  </header>
</template>
