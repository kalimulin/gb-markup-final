<template>
  <div class="catalog-page">
    <div class="container">
      <product-list :product-list="PRODUCTS" />
    </div>
  </div>
</template>

<script>
import { PRODUCTS } from '@/components/constants'
import ProductList from '@/components/ProductListComponent/index.vue'

export default {
  name: 'HomeView',
  components: { ProductList },
  created () {
    this.PRODUCTS = PRODUCTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
