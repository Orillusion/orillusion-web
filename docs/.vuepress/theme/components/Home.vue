<script setup lang="ts">
import HomeContent from '@vuepress/theme-default/lib/client/components/HomeContent.vue'
import HomeFeatures from '@vuepress/theme-default/lib/client/components/HomeFeatures.vue'
import HomeFooter from '@vuepress/theme-default/lib/client/components/HomeFooter.vue'
import HomeHero from './HomeHero.vue'
</script>

<template>
  <main class="home">
    <HomeHero />
    <HomeFeatures />
    <HomeContent />
    <HomeFooter />
  </main>
</template>
