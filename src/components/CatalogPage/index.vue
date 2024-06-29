<template>
  <div class="catalog-page">
    <Breadcrumbs title="NEW ARRIVALS" path="HOME / MEN / <span>NEW ARRIVALS</span>" />
    <div class="container">
      <div class="catalog-page__products">
        <product-list :product-list="PRODUCTS" />
        <div class="catalog-page__pagination">
          <Pagination />
        </div>
      </div>
    </div>
    <Capabilities />
  </div>
</template>

<script>
import { PRODUCTS } from '@/components/constants'
import ProductList from '@/components/ProductListComponent/index.vue'
import Capabilities from '@/components/CapabilitiesComponent/index.vue'
import Breadcrumbs from '@/components/BreadcrumbsComponent/index.vue'
import Pagination from '@/components/PaginationComponent/index.vue'

export default {
  name: 'HomeView',
  components: { Pagination, Breadcrumbs, Capabilities, ProductList },
  created () {
    this.PRODUCTS = PRODUCTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
