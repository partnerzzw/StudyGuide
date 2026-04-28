<script setup lang="ts">
import { computed, ref } from 'vue'
import BackendGuide from './pages/backend/index.vue'
import WebGuide from './pages/web/index.vue'

type GuideType = 'web' | 'backend'

const currentGuide = ref<GuideType>('web')

const guideTabs: Array<{ key: GuideType; label: string }> = [
  { key: 'web', label: '学前端' },
  { key: 'backend', label: '学后端' },
]

const CurrentGuideComponent = computed(() => (currentGuide.value === 'web' ? WebGuide : BackendGuide))
</script>

<template>
  <div class="app-shell">
    <div class="guide-switcher" role="tablist" aria-label="学习指南切换">
      <button
        v-for="tab in guideTabs"
        :key="tab.key"
        class="guide-switcher__button"
        :class="{ active: currentGuide === tab.key }"
        type="button"
        role="tab"
        :aria-selected="currentGuide === tab.key"
        @click="currentGuide = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <component :is="CurrentGuideComponent" />
  </div>
</template>

<style scoped>
.guide-switcher {
  position: fixed;
  top: 80px;
  right: 24px;
  z-index: 200;
  display: flex;
  gap: 8px;
  padding: 6px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(8px);
}

.guide-switcher__button {
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  background: transparent;
  color: #475569;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.guide-switcher__button:hover {
  color: #1d4ed8;
  background: #eff6ff;
}

.guide-switcher__button.active {
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #1a73e8);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.26);
}

@media (max-width: 900px) {
  .guide-switcher {
    top: 10px;
    right: 12px;
  }

  .guide-switcher__button {
    padding: 7px 12px;
    font-size: 13px;
  }
}
</style>
