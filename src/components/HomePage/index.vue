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
          <product-list
            :product-list="FEATURED_ITEMS"
            @add="addToCart"
          />
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
    <div class="container">
      <div
        class="home-page__cart-items"
        v-if="cart && cart.length"
      >
        <div class="cart-page__items">
          <div
            class="cart-page__item"
            v-for="({ title, price, color, size, quantity, img, id }, number) in cart"
            :key="number"
          >
            <div class="cart-page__item-img">
              <img :src="img">
            </div>
            <div class="cart-page__item-desc">
              <div class="cart-page__item-title">{{ title }}</div>
              <div class="cart-page__item-price">Price: <span>{{ price }}</span></div>
              <div class="cart-page__item-color">Color: {{ color }}</div>
              <div class="cart-page__item-size">Size: {{ size }}</div>
              <div class="cart-page__item-quantity">Quantity: <input type="number" :value="quantity"></div>
            </div>
            <div
              class="cart-page__item-close"
              @click="removeFromCart(id)"
            >
              <IconClose />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CAPABILITIES, FEATURED_ITEMS, SECTIONS, TEXTS } from '@/components/constants'
import ProductList from '@/components/ProductListComponent/index.vue'
import Capabilities from '@/components/CapabilitiesComponent/index.vue'
import IconClose from '@/svg/icon-close.vue'

export default {
  name: 'HomeView',
  components: { IconClose, Capabilities, ProductList },
  data () {
    return {
      cart: []
    }
  },
  created () {
    this.TEXTS = TEXTS
    this.SECTIONS = SECTIONS
    this.FEATURED_ITEMS = FEATURED_ITEMS
    this.CAPABILITIES = CAPABILITIES
  },
  methods: {
    addToCart (item) {
      let quantity = 1
      const existed = this.cart.find(product => product.id === item.id)

      if (existed) {
        quantity = existed.quantity + 1
        existed.quantity = quantity
      } else {
        this.cart.push({ ...item, quantity: 1 })
      }

      this.$emit('update', this.cart)
    },
    removeFromCart (id) {
      this.cart = this.cart.filter(item => item.id !== id)
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
