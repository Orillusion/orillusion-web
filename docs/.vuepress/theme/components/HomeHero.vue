<script setup lang="ts">
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue'
import Logo from './Logo.vue'
import {
    ClientOnly,
    usePageFrontmatter,
    useSiteLocaleData,
    withBase,
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import type { FunctionalComponent } from 'vue'
import { computed, h, reactive } from 'vue'
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/lib/shared'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()
const isDarkMode = useDarkMode()

const heroImage = computed(() => {
    if (isDarkMode.value && frontmatter.value.heroImageDark !== undefined) {
        return frontmatter.value.heroImageDark
    }
    return frontmatter.value.heroImage
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

// const HomeHeroImage: FunctionalComponent = () => {
//     if (!heroImage.value) return null
//     const img = h('img', {
//         src: withBase(heroImage.value),
//         alt: heroAlt.value,
//     })
//     if (frontmatter.value.heroImageDark === undefined) {
//         return img
//     }
//     // wrap hero image with <ClientOnly> to avoid ssr-mismatch
//     // when using a different hero image in dark mode
//     return h(ClientOnly, () => img)
// }

const data = reactive({
    showDemo: false,
    loaded: false
})
</script>

<template>
    <header class="hero">
        <Logo :loading="data.showDemo"></Logo>
        <!-- <HomeHeroImage/> -->

        <h1 v-if="heroText" id="main-title">
            {{ heroText }}
        </h1>

        <p v-if="tagline" class="description">
            {{ tagline }}
        </p>

        <p v-if="actions.length" class="actions">
            <a class="action-button primary" aria-label="Get Started" @click="data.showDemo = true" style="cursor:pointer">
                {{actions[0].text.match(/入门/)? '预览 Demo':'Alpha Demo'}}
            </a>
            <AutoLink :key="actions[1].text" class="action-button" :class="[actions[1].type]" :item="actions[1]"/>
            <!-- <AutoLink v-for="action in actions" :key="action.text" class="action-button" :class="[action.type]"
                :item="action" /> -->
        </p>
        <div class="cover" v-if="data.showDemo">
            <iframe @click.stop src="https://demo.orillusion.com/ecs/example/asteroids.html" scrolling="no" frameborder="0" ></iframe>
            <p @click="data.showDemo = false">{{actions[0].text.match(/入门/)? '关闭 DEMO':'CLOSE DEMO'}}</p>
        </div>
    </header>
</template>

<style scoped>
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
    background-image: url('https://www.orillusion.com/images/logo_white.png');
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: center calc(50% - 15px);
  }
</style>
