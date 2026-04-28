<script setup lang="ts">
import LearningOutline from './LearningOutline.vue'
import StarRating from './StarRating.vue'
import { categoryMeta } from '../data'
import type { TechGuide } from '../types'

defineProps<{
  tech: TechGuide
}>()
</script>

<template>
  <article class="tech-card">
    <div class="card-header">
      <div class="card-icon" :class="tech.iconClass">{{ tech.icon }}</div>
      <div class="card-title-wrap">
        <h3>{{ tech.name }}</h3>
        <div class="subtitle">{{ tech.subtitle }}</div>
        <div class="card-badges">
          <span class="badge" :class="categoryMeta[tech.category].className">{{ tech.categoryLabel }}</span>
          <span class="badge metric-badge frequency-badge">
            使用频次 <StarRating :value="tech.frequency" />
          </span>
          <span class="badge metric-badge difficulty-badge">
            难度 <StarRating :value="tech.difficulty" />
          </span>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div>
        <LearningOutline :stages="tech.learningOutline" />

        <div class="card-section-title"><div class="dot"></div>核心学习内容</div>
        <ul class="learn-list">
          <li v-for="topic in tech.coreTopics" :key="topic">{{ topic }}</li>
        </ul>

        <div class="timeline-row">
          <div class="timeline-num">{{ tech.periodDescription.match(/\d+/)?.[0] }}</div>
          <div class="timeline-label">
            <strong>建议学习周期</strong>
            {{ tech.periodDescription }}
          </div>
        </div>

        <div v-if="tech.tip" class="tip-box">{{ tech.tip }}</div>
        <div v-if="tech.note" class="note-box">{{ tech.note }}</div>
      </div>

      <div>
        <div class="card-section-title"><div class="dot"></div>推荐书籍</div>
        <div v-for="book in tech.books" :key="book.name" class="book-item">
          <div class="book-name">{{ book.name }}</div>
          <div class="book-desc">{{ book.description }}</div>
        </div>

        <div class="card-section-title resources-title"><div class="dot"></div>学习网站</div>
        <div v-for="site in tech.sites" :key="site.url" class="site-item">
          <a :href="site.url" target="_blank" rel="noopener noreferrer">{{ site.url }}</a>
          <div class="site-desc">{{ site.description }}</div>
        </div>
      </div>
    </div>
  </article>
</template>
