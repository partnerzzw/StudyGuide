<script setup lang="ts">
import StarRating from './StarRating.vue'
import { categoryMeta } from '../data'
import type { OverviewRow } from '../types'

defineProps<{
  rows: OverviewRow[]
}>()
</script>

<template>
  <section id="overview" class="section anchor-target">
    <div class="section-title">📊 技术总览</div>
    <table class="overview-table">
      <thead>
        <tr>
          <th>类型</th>
          <th>技术</th>
          <th>使用频次</th>
          <th>难度</th>
          <th>建议学习周期</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td>
            <span class="badge" :class="categoryMeta[row.category].className">
              {{ categoryMeta[row.category].label }}
            </span>
          </td>
          <td><strong>{{ row.name }}</strong></td>
          <td><StarRating :value="row.frequency" /></td>
          <td><StarRating :value="row.difficulty" /></td>
          <td>{{ row.period }}</td>
          <td>{{ row.remark }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
