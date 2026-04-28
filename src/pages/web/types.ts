export type WebCategory = 'base' | 'language' | 'engineering' | 'network' | 'framework' | 'miniapp'

export interface NavSection {
  title: string
  items: Array<Pick<WebGuide, 'id' | 'name' | 'shortName' | 'icon' | 'navIconBg'>>
}

export interface OverviewRow {
  category: WebCategory
  name: string
  frequency: number
  difficulty: number
  period: string
  remark: string
}

export interface LearningStage {
  title: string
  items: string[]
}

export interface BookResource {
  name: string
  description: string
}

export interface SiteResource {
  url: string
  description: string
}

export interface WebGuide {
  id: string
  name: string
  shortName: string
  icon: string
  iconClass: string
  navIconBg: string
  category: WebCategory
  categoryLabel: string
  sectionTitle?: string
  subtitle: string
  frequency: number
  difficulty: number
  periodWeeks: string
  periodDescription: string
  remark: string
  learningOutline: LearningStage[]
  coreTopics: string[]
  books: BookResource[]
  sites: SiteResource[]
  tip?: string
  note?: string
}
