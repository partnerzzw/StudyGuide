<script setup lang="ts">
defineProps<{
  stats: Array<{ value: string | number; label: string }>
}>()
</script>

<template>
  <section class="hero">
    <h1>🎯 后端技术栈系统学习计划</h1>
    <p>
      本指南覆盖 9 项企业级后端核心技术，按使用频次与难度分级，配套推荐书籍、官方文档及学习路径，帮助你系统、高效地掌握后端开发技能。
    </p>
    <div class="hero-meta">
      <div v-for="stat in stats" :key="stat.label" class="hero-stat">
        <div class="num">{{ stat.value }}</div>
        <div class="label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>
