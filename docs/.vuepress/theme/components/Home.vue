<template>
  <main class="home" :aria-labelledby="heroText ? 'main-title' : undefined">
    <header class="hero">
      <Logo v-if="heroImage.match(/\.svg$/)"></Logo>
      <img v-else-if="heroImage" :src="heroImage" :alt="heroAlt" />

      <h1 v-if="heroText" id="main-title">
        {{ heroText }}
      </h1>

      <p v-if="tagline" class="description">
        {{ tagline }}
      </p>

      <p v-if="actions.length" class="actions">
        <a class="no-ready nav-link action-button primary" aria-label="Get Started">
          <span> {{actions[0].text}} </span>
          <span> Coming Soon </span>
        </a>
        <a class="no-ready nav-link action-button" aria-label="Introduction">
          <span> {{actions[1].text}} </span>
          <span> Coming Soon </span>
        </a>
        <!-- <NavLink
          :key="actions[1].text"
          class="action-button"
          :class="[actions[1].type]"
          :item="actions[1]"
        /> -->
      </p>
    </header>

    <div v-if="features.length" class="features">
      <div v-for="feature in features" :key="feature.title" class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <div class="theme-default-content custom">
      <Content />
    </div>

    <template v-if="footer">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-if="footerHtml" class="footer" v-html="footer" />
      <div v-else class="footer" v-text="footer" />
    </template>
  </main>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../shared'

import NavLink from '@vuepress/theme-default/lib/client/components/NavLink.vue'
import Logo from './Logo.vue'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()

// hero image and title
const heroImage = computed(() => {
  if (!frontmatter.value.heroImage) {
    return null
  }
  return withBase(frontmatter.value.heroImage)
})
const heroText = computed(() => {
  if (frontmatter.value.heroText === null) {
    return null
  }
  return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})
const heroAlt = computed(
  () => frontmatter.value.heroAlt || heroText.value || 'hero'
)
const tagline = computed(() => {
  if (frontmatter.value.tagline === null) {
    return null
  }
  return (
    frontmatter.value.tagline ||
    siteLocale.value.description ||
    'Welcome to your VuePress site'
  )
})

// action buttons
const actions = computed(() => {
  if (!isArray(frontmatter.value.actions)) {
    return []
  }

  return frontmatter.value.actions.map(({ text, link, type = 'primary' }) => ({
    text,
    link,
    type,
  }))
})

// feature list
const features = computed(() => {
  if (isArray(frontmatter.value.features)) {
    return frontmatter.value.features
  }
  return []
})

// footer
const footer = computed(() => frontmatter.value.footer)
const footerHtml = computed(() => frontmatter.value.footerHtml)
</script>

<style scoped>
  .feature{
    text-align: center;
  }
  .action-button{
    width: 180px;
  }
  .no-ready{
    cursor: not-allowed;
  }
  /* .no-ready:hover{
    background-color: #22272e !important;
  } */
  .no-ready > span:last-child{
    display: none;
    /* color: var(--c-brand); */
  }
  .no-ready:hover > span:first-child{
    display: none;
  }
  .no-ready:hover > span:last-child{
    display: inline;
  }
  
</style>
