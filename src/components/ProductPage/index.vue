<template>
  <div class="product-page">
    <Breadcrumbs title="NEW ARRIVALS" path="HOME / MEN / <span>NEW ARRIVALS</span>" />
    <div class="container">product page</div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/BreadcrumbsComponent/index.vue'

export default {
  name: 'ProductPage',
  components: { Breadcrumbs }
}
</script>

<style lang="scss" src="./style.scss"></style>
