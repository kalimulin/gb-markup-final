<template>
  <div class="product-list">
    <div class="product-list__items">
      <div
        v-for="(product, number) in productList"
        :key="number"
        class="product-list__item"
      >
        <div class="product-list__image">
          <img
            :src="`${product.img}`"
            alt="product-list"
            @click="$router.push('/product')"
          >
          <div class="product-list__overlay">
            <div
              class="product-list__add"
              @click="addToCart(product)"
            >
              <img
                class="product-list__add-icon"
                src="@/assets/img/icon-cart.svg"
                alt="cart"
              >
              <span>{{ TEXTS.addToCart }}</span>
            </div>
          </div>
        </div>
        <router-link
          to="/product"
          class="product-list__item-text"
        >
          <div class="product-list__item-title">{{ product.title }}</div>
          <div class="product-list__item-desc">{{ product.desc }}</div>
          <div class="product-list__item-price">{{ product.price }}</div>
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
  data () {
    return {
      cart: []
    }
  },
  created () {
    this.TEXTS = TEXTS
  },
  methods: {
    addToCart (item) {
      this.$emit('add', item)
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
