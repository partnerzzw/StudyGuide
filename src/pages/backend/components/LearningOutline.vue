<script setup lang="ts">
import type { LearningStage } from '../types'

defineProps<{
  stages: LearningStage[]
}>()
</script>

<template>
  <div class="card-section-title"><div class="dot"></div>学习目录</div>
  <div class="learning-outline">
    <div
      v-for="(stage, index) in stages"
      :key="stage.title"
      class="outline-stage"
      :data-step="index + 1"
    >
      <div class="outline-stage-title">{{ stage.title }}</div>
      <div class="outline-items">
        <span v-for="item in stage.items" :key="item">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
