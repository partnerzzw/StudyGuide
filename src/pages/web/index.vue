<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import OverviewTable from './components/OverviewTable.vue'
import WebHero from './components/WebHero.vue'
import WebSection from './components/WebSection.vue'
import WebSidebar from './components/WebSidebar.vue'
import WebTopBar from './components/WebTopBar.vue'
import { heroStats, learningRoute, navSections, overviewRows, webGuides } from './data'
import './index.css'

const activeId = ref('overview')
const progress = ref(0)
let observer: IntersectionObserver | undefined

const sectionIds = computed(() => ['overview', ...webGuides.map((guide) => guide.id)])

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
      if (current?.target.id) activeId.value = current.target.id
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
  <div class="web-guide-page">
    <WebSidebar :nav-sections="navSections" :active-id="activeId" @navigate="navigateTo" />

    <main class="web-main">
      <WebTopBar :progress="progress" />
      <WebHero :stats="heroStats" :route="learningRoute" />
      <OverviewTable :rows="overviewRows" />
      <WebSection v-for="guide in webGuides" :key="guide.id" :guide="guide" />
    </main>
  </div>
</template>
