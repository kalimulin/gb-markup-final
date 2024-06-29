<template>
  <div class="product-list">
    <div class="product-list__items">
      <div
        v-for="({title, desc, price, img}, number) in productList"
        :key="number"
        class="product-list__item"
      >
        <div class="product-list__image">
          <img
            :src="`${img}`"
            alt="product-list"
            @click="$router.push('/product')"
          >
          <div class="product-list__overlay">
            <router-link
              to="/cart"
              class="product-list__add"
            >
              <img
                class="product-list__add-icon"
                src="@/assets/img/icon-cart.svg"
                alt="cart"
              >
              <span>{{ TEXTS.addToCart }}</span>
            </router-link>
          </div>
        </div>
        <router-link
          to="/product"
          class="product-list__item-text"
        >
          <div class="product-list__item-title">{{ title }}</div>
          <div class="product-list__item-desc">{{ desc }}</div>
          <div class="product-list__item-price">{{ price }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { TEXTS } from '@/components/constants'

export default {
  name: 'ProductList',
  props: {
    productList: {
      type: Array,
      default: () => []
    }
  },
  created () {
    this.TEXTS = TEXTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
