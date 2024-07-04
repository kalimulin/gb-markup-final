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
              <div class="cart-page__item-price">Price: <span>{{ price }}</span></div>
              <div class="cart-page__item-color">Color: {{ color }}</div>
              <div class="cart-page__item-size">Size: {{ size }}</div>
              <div class="cart-page__item-quantity">Quantity: <input type="number" :value="quantity"></div>
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
          <div class="cart-page__address-title">SHIPPING ADRESS</div>
          <div class="cart-page__address">
            <form action="/" class="form">
              <input type="text" name="country" class="form__field" placeholder="Country">
              <input type="text" name="state" class="form__field" placeholder="State">
              <input type="text" name="zip" class="form__field" placeholder="Postcode / ZIP">
              <button type="submit" class="cart-page__button">
                Get a quote
              </button>
            </form>
          </div>
          <div class="cart-page__checkout">
            <div class="cart-page__checkout-subtotal">
              SUB TOTAL<span>$900</span>
            </div>
            <div class="cart-page__checkout-grand-total">
              GRAND TOTAL<span>$900</span>
            </div>
            <div class="cart-page__checkout-button">
              PROCEED TO CHECKOUT
            </div>
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
