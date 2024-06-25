<template>
  <div class="catalog-page">
    <section class="featured">
      <div class="container">
        <div class="featured__title">{{ TEXTS.featured_title }}</div>
        <div class="featured__subtitle">{{ TEXTS.featured_subtitle }}</div>
        <div class="featured__items">
          <div
            v-for="({title, desc, price}, number) in FEATURED_ITEMS"
            :key="number"
            class="featured__item"
          >
            <img :src="`img/featured/${number+1}.jpg`" alt="featured" >
            <div class="featured__item-text">
              <div class="featured__item-title">{{ title }}</div>
              <div class="featured__item-desc">{{ desc }}</div>
              <div class="featured__item-price">{{ price }}</div>
            </div>
          </div>
        </div>
        <div class="featured__browse-all">
          <span>{{ TEXTS.browse_all }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FEATURED_ITEMS, TEXTS } from '@/components/constants'

export default {
  name: 'HomeView',
  created () {
    this.TEXTS = TEXTS
    this.FEATURED_ITEMS = FEATURED_ITEMS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
