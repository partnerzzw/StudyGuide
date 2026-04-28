<script setup lang="ts">
import TechCard from './TechCard.vue'
import type { TechGuide } from '../types'

defineProps<{
  tech: TechGuide
}>()
</script>

<template>
  <section :id="tech.id" class="section anchor-target" :class="{ 'section-compact': !tech.sectionTitle }">
    <div v-if="tech.sectionTitle" class="section-title">{{ tech.sectionTitle }}</div>
    <div class="tech-cards">
      <TechCard :tech="tech" />
    </div>
  </section>
</template>
