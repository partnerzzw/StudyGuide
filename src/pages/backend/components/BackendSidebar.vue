<script setup lang="ts">
import type { NavSection } from '../types'

defineProps<{
  navSections: NavSection[]
  activeId: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
}>()
</script>

<template>
  <nav class="backend-sidebar" aria-label="后端学习指南导航">
    <div class="sidebar-header">
      <h1>后端技术栈<br />学习指南</h1>
      <p>9 项核心技术 · 系统学习路径</p>
    </div>

    <div class="sidebar-section-title">概览</div>
    <a
      href="#overview"
      class="nav-item"
      :class="{ active: activeId === 'overview' }"
      @click.prevent="emit('navigate', 'overview')"
    >
      <div class="nav-icon" style="background: #1e3a5f">📊</div>
      技术总览
    </a>

    <template v-for="section in navSections" :key="section.title">
      <div class="sidebar-section-title">{{ section.title }}</div>
      <a
        v-for="item in section.items"
        :key="item.id"
        :href="`#${item.id}`"
        class="nav-item"
        :class="{ active: activeId === item.id }"
        @click.prevent="emit('navigate', item.id)"
      >
        <div class="nav-icon" :style="{ background: item.navIconBg }">{{ item.icon }}</div>
        {{ item.shortName }}
      </a>
    </template>

    <div class="sidebar-footer">
      总学习周期约 <strong>28–40 周</strong><br />
      建议按优先级顺序学习
    </div>
  </nav>
</template>
