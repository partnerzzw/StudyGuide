<script setup lang="ts">
import LearningOutline from './LearningOutline.vue'
import StarRating from './StarRating.vue'
import { categoryMeta } from '../data'
import type { WebGuide } from '../types'

defineProps<{
  guide: WebGuide
}>()
</script>

<template>
  <article class="tech-card">
    <div class="card-header">
      <div class="card-icon" :class="guide.iconClass">{{ guide.icon }}</div>
      <div class="card-title-wrap">
        <h3>{{ guide.name }}</h3>
        <div class="subtitle">{{ guide.subtitle }}</div>
        <div class="card-badges">
          <span class="badge" :class="categoryMeta[guide.category].className">{{ guide.categoryLabel }}</span>
          <span class="badge metric-badge frequency-badge">使用频次 <StarRating :value="guide.frequency" /></span>
          <span class="badge metric-badge difficulty-badge">难度 <StarRating :value="guide.difficulty" /></span>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div>
        <LearningOutline :stages="guide.learningOutline" />

        <div class="card-section-title"><div class="dot"></div>核心学习内容</div>
        <ul class="learn-list">
          <li v-for="topic in guide.coreTopics" :key="topic">{{ topic }}</li>
        </ul>

        <div class="timeline-row">
          <div class="timeline-num">{{ guide.periodDescription.match(/\d+/)?.[0] }}</div>
          <div class="timeline-label">
            <strong>建议学习周期</strong>
            {{ guide.periodDescription }}
          </div>
        </div>

        <div v-if="guide.tip" class="tip-box">{{ guide.tip }}</div>
        <div v-if="guide.note" class="note-box">{{ guide.note }}</div>
      </div>

      <div>
        <div class="card-section-title"><div class="dot"></div>推荐书籍</div>
        <div v-for="book in guide.books" :key="book.name" class="book-item">
          <div class="book-name">{{ book.name }}</div>
          <div class="book-desc">{{ book.description }}</div>
        </div>

        <div class="card-section-title resources-title"><div class="dot"></div>学习网站</div>
        <div v-for="site in guide.sites" :key="site.url" class="site-item">
          <a :href="site.url" target="_blank" rel="noopener noreferrer">{{ site.url }}</a>
          <div class="site-desc">{{ site.description }}</div>
        </div>
      </div>
    </div>
  </article>
</template>
