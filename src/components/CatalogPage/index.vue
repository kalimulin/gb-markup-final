<template>
  <div class="catalog-page">
    <section class="featured">
      <div class="container">
        <div class="featured__title">{{ TEXTS.featured_title }}</div>
        <div class="featured__subtitle">{{ TEXTS.featured_subtitle }}</div>
        <product-list :product-list="FEATURED_ITEMS" />
        <div class="featured__browse-all">
          <span>{{ TEXTS.browse_all }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FEATURED_ITEMS, TEXTS } from '@/components/constants'
import ProductList from '@/components/ProductListComponent/index.vue'

export default {
  name: 'HomeView',
  components: { ProductList },
  created () {
    this.TEXTS = TEXTS
    this.FEATURED_ITEMS = FEATURED_ITEMS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
