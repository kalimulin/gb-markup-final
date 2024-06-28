<template>
  <div class="home-page">
    <section class="banner">
      <div class="banner__left">
        <img
          src="img/banner_man.png"
          class="banner__left-img"
          alt="banner"
        >
      </div>
      <div class="banner__text-block">
        <div class="banner__title">{{ TEXTS.banner_title }}</div>
        <div class="banner__subtitle" v-html="TEXTS.banner_subtitle"></div>
      </div>
    </section>
    <section class="sections">
      <div class="container">
        <router-link
          :to="path"
          v-for="{ str1, str2, classSuffix, path } in SECTIONS"
          :key="str2"
          class="sections__item section"
          :class="`section_${classSuffix}`"
        >
          <div class="section__text">
            <div class="section__text1">{{ str1 }}</div>
            <div class="section__text2">{{ str2 }}</div>
          </div>
        </router-link>
      </div>
    </section>
    <section class="featured">
      <div class="container">
        <div class="featured__title">{{ TEXTS.featured_title }}</div>
        <div class="featured__subtitle">{{ TEXTS.featured_subtitle }}</div>
        <div class="featured__product-list">
          <product-list :product-list="FEATURED_ITEMS" />
        </div>
        <router-link
          to="/catalog"
          class="featured__browse-all"
        >
          <span>{{ TEXTS.browse_all }}</span>
        </router-link>
      </div>
    </section>
    <Capabilities />
  </div>
</template>

<script>
import { CAPABILITIES, FEATURED_ITEMS, SECTIONS, TEXTS } from '@/components/constants'
import ProductList from '@/components/ProductListComponent/index.vue'
import Capabilities from '@/components/CapabilitiesComponent/index.vue'

export default {
  name: 'HomeView',
  components: { Capabilities, ProductList },
  created () {
    this.TEXTS = TEXTS
    this.SECTIONS = SECTIONS
    this.FEATURED_ITEMS = FEATURED_ITEMS
    this.CAPABILITIES = CAPABILITIES
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
