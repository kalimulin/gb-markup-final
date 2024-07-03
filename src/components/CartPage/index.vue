<template>
  <div class="cart-page">
    <Breadcrumbs title="SHOPPING CART" path="" />
    <div class="cart-page__cart">
      <div class="container">
        <div class="cart-page__items">
          <div
            class="cart-page__item"
            v-for="({ title, price, color, size, quantity, img }, number) in CART"
            :key="number"
          >
            <div class="cart-page__item-img">
              <img :src="img">
            </div>
            <div class="cart-page__item-desc">
              <div class="cart-page__item-title">{{ title }}</div>
              <div class="cart-page__item-price">Price: {{ price }}</div>
              <div class="cart-page__item-color">Color: {{ color }}</div>
              <div class="cart-page__item-size">Size: {{ size }}</div>
              <div class="cart-page__item-quantity">Quantity: {{ quantity }}</div>
            </div>
            <div class="cart-page__item-close">
              <IconClose />
            </div>
          </div>
          <div class="cart-page__buttons">
            <div class="cart-page__button">
              Clear shopping cart
            </div>
            <div class="cart-page__button">
              Continue shopping
            </div>
          </div>
        </div>
        <div class="cart-page__right">
          <div class="cart-page__address">
            <div class="cart-page__address-title">SHIPPING ADRESS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/BreadcrumbsComponent/'
import { CART } from '@/components/constants'
import IconClose from '@/svg/icon-close.vue'

export default {
  name: 'CartPage',
  components: { IconClose, Breadcrumbs },
  created () {
    this.CART = CART
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
