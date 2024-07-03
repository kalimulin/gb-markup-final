<template>
  <div class="product-page">
    <Breadcrumbs title="NEW ARRIVALS" path="HOME / MEN / <span>NEW ARRIVALS</span>" />
    <section class="product-page__slideshow slideshow">
      <div class="slideshow__prev">
        <IconChevron />
      </div>
      <div class="slideshow__next">
        <IconChevron />
      </div>
      <div class="slideshow__slides">
        <div class="slideshow__slide">
          <img src="img/product_image.jpg" alt="product">
        </div>
      </div>
    </section>
    <div class="product-page__texts">
      <div class="container">
        <div class="product-page__title1">WOMEN COLLECTION</div>
        <div class="product-page__title2">MOSCHINO CHEAP AND CHIC</div>
        <p class="product-page__desc">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. </p>
        <div class="product-page__price">$561</div>
        <div class="product-page__chooses">
          <div class="product-page__choose">
            <span>CHOOSE COLOR</span>
            <IconChevronDown/>
          </div>
          <div class="product-page__choose">
            <span>CHOOSE SIZE</span>
            <IconChevronDown/>
          </div>
          <div class="product-page__choose">
            <span>QUANTITY</span>
            <IconChevronDown/>
          </div>
        </div>
        <router-link to="/cart" class="product-page__button-add">
          <IconCart />
          <span>Add to Cart</span>
        </router-link>
      </div>
    </div>
    <div class="product-page__other-products">
      <div class="container">
        <product-list :product-list="PRODUCTS.slice(0,3)" />
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/BreadcrumbsComponent'
import ProductList from '@/components/ProductListComponent'
import { PRODUCTS } from '@/components/constants'
import IconChevron from '@/svg/icon-chevron.vue'
import IconCart from '@/svg/icon-cart.vue'
import IconChevronDown from '@/svg/icon-chevron-down.vue'

export default {
  name: 'ProductPage',
  components: {
    IconChevronDown,
    IconCart,
    IconChevron,
    ProductList,
    Breadcrumbs
  },
  created () {
    this.PRODUCTS = PRODUCTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
