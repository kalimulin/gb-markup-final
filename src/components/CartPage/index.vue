<template>
  <div class="cart-page">
    <Breadcrumbs title="SHOPPING CART" path="" />
    <div class="container">Cart page</div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/BreadcrumbsComponent/'

export default {
  name: 'CartPage',
  components: { Breadcrumbs }
}
</script>

<style lang="scss" src="./style.scss"></style>
