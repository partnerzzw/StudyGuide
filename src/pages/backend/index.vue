<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import BackendHero from './components/BackendHero.vue'
import BackendSidebar from './components/BackendSidebar.vue'
import BackendTopBar from './components/BackendTopBar.vue'
import OverviewTable from './components/OverviewTable.vue'
import TechSection from './components/TechSection.vue'
import { heroStats, navSections, overviewRows, techGuides } from './data'
import './index.css'

const activeId = ref('overview')
const progress = ref(0)
let observer: IntersectionObserver | undefined

const sectionIds = computed(() => ['overview', ...techGuides.map((tech) => tech.id)])

function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight
  progress.value = total <= 0 ? 0 : Math.min(100, Math.max(0, Math.round((window.scrollY / total) * 100)))
}

function navigateTo(id: string) {
  activeId.value = id
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(async () => {
  await nextTick()
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })

  observer = new IntersectionObserver(
    (entries) => {
      const current = entries.find((entry) => entry.isIntersecting)
      if (current?.target.id) {
        activeId.value = current.target.id
      }
    },
    { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
  )

  sectionIds.value.forEach((id) => {
    const section = document.getElementById(id)
    if (section) observer?.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  observer?.disconnect()
})
</script>

<template>
  <div class="backend-guide-page">
    <BackendSidebar :nav-sections="navSections" :active-id="activeId" @navigate="navigateTo" />

    <main class="backend-main">
      <BackendTopBar :progress="progress" />
      <BackendHero :stats="heroStats" />
      <OverviewTable :rows="overviewRows" />
      <TechSection v-for="tech in techGuides" :key="tech.id" :tech="tech" />
    </main>
  </div>
</template>
