<script setup lang="ts">
import WebCard from './WebCard.vue'
import type { WebGuide } from '../types'

defineProps<{
  guide: WebGuide
}>()
</script>

<template>
  <section :id="guide.id" class="section anchor-target" :class="{ 'section-compact': !guide.sectionTitle }">
    <div v-if="guide.sectionTitle" class="section-title">{{ guide.sectionTitle }}</div>
    <div class="tech-cards">
      <WebCard :guide="guide" />
    </div>
  </section>
</template>
