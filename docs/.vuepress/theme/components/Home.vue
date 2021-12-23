<template>
  <main class="home" :aria-labelledby="heroText ? 'main-title' : undefined">
    <header class="hero">
      <Logo :loading="data.showDemo"></Logo>
      <h1 v-if="heroText" id="main-title">
        {{ heroText }}
      </h1>

      <p v-if="tagline" class="description">
        {{ tagline }}
      </p>

      <p v-if="actions.length" class="actions">
        <a class="nav-link action-button primary" aria-label="Get Started" @click="data.showDemo = true">
          <span> {{actions[0].text.match(/入门/)? '预览 Demo':'Alpha Demo'}} </span>
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
    
    <div class="cover" v-if="data.showDemo">
      <iframe @click.stop src="https://demo.orillusion.com/Asteroids/" scrolling="no" frameborder="0" ></iframe>
      <p @click="data.showDemo = false">{{actions[0].text.match(/入门/)? '关闭 DEMO':'CLOSE DEMO'}}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  usePageFrontmatter,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import { computed, reactive } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '../shared'

//import NavLink from '@vuepress/theme-default/lib/client/components/NavLink.vue'
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

let data = reactive({showDemo: false})
</script>

<style scoped>
  .feature{
    text-align: center;
  }
  .action-button{
    width: 180px;
    cursor: pointer;
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
  .cover{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.75);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5%;
  }
  .cover > p{
    text-align:center;cursor:pointer;
    font-size: 16px;
    font-weight: bold;
  }
  .cover > p:hover{
    color: var(--c-brand);
  }
  iframe{
    height: 100%;
    border: 1px solid #233;
    background: #22272e;
    background-image: url('/images/logo_white.png');
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: center calc(50% - 15px);
  }
</style>
