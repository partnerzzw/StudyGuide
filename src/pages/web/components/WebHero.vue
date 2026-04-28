<script setup lang="ts">
defineProps<{
  stats: Array<{ value: string | number; label: string }>
  route: Array<{ id: string; label: string; icon: string }>
}>()
</script>

<template>
  <section class="hero">
    <h1>🚀 前端技术栈系统学习计划</h1>
    <p>
      按照 HTML/CSS → JavaScript → 前端工程化 → 前端网络 → Vue → React → 小程序 的顺序，把页面、交互、工程、网络、框架和跨端开发串成一条完整成长路线。
    </p>

    <div class="route-line" aria-label="前端学习路线">
      <a v-for="item in route" :key="item.id" :href="`#${item.id}`" class="route-node">
        <span>{{ item.icon }}</span>
        {{ item.label }}
      </a>
    </div>

    <div class="hero-meta">
      <div v-for="stat in stats" :key="stat.label" class="hero-stat">
        <div class="num">{{ stat.value }}</div>
        <div class="label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>
