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
  <nav class="web-sidebar" aria-label="前端学习指南导航">
    <div class="sidebar-header">
      <h1>前端技术栈<br />学习指南</h1>
      <p>7 个核心模块 · 串联式成长路线</p>
    </div>

    <div class="sidebar-section-title">概览</div>
    <a
      href="#overview"
      class="nav-item"
      :class="{ active: activeId === 'overview' }"
      @click.prevent="emit('navigate', 'overview')"
    >
      <div class="nav-icon" style="background: #3b2a5f">📊</div>
      学习总览
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
      推荐路线：<strong>基础 → 工程 → 框架 → 跨端</strong><br />
      每一阶段都配一个小项目
    </div>
  </nav>
</template>
