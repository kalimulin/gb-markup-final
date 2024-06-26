<template>
  <div class="product-list">
    <div class="product-list__items">
      <div
        v-for="({title, desc, price, img}, number) in productList"
        :key="number"
        class="product-list__item"
      >
        <img :src="`${img}`" alt="product-list" >
        <div class="product-list__item-text">
          <div class="product-list__item-title">{{ title }}</div>
          <div class="product-list__item-desc">{{ desc }}</div>
          <div class="product-list__item-price">{{ price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    productList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
