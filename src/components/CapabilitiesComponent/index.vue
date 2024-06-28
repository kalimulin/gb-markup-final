<template>
  <section class="capabilities">
    <div class="container">
      <div class="capabilities__item">
        <div class="capabilities__item-icon">
          <img
            src="@/assets/img/icon-truck.svg"
            alt="delivery"
          >
        </div>
        <div class="capabilities__item-title">{{ CAPABILITIES.freeDelivery.title }}</div>
        <div class="capabilities__item-subtitle">{{ CAPABILITIES.freeDelivery.subtitle }}</div>
      </div>
      <div class="capabilities__item">
        <div class="capabilities__item-icon">
          <img
            src="@/assets/img/icon-discount.svg"
            alt="discounts"
          >
        </div>
        <div class="capabilities__item-title">{{ CAPABILITIES.salesDiscounts.title }}</div>
        <div class="capabilities__item-subtitle">{{ CAPABILITIES.salesDiscounts.subtitle }}</div>
      </div>
      <div class="capabilities__item">
        <div class="capabilities__item-icon">
          <img
            src="@/assets/img/icon-crown.svg"
            alt="quality"
          >
        </div>
        <div class="capabilities__item-title">{{ CAPABILITIES.qualityAssurance.title }}</div>
        <div class="capabilities__item-subtitle">{{ CAPABILITIES.qualityAssurance.subtitle }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { CAPABILITIES } from '@/components/constants'

export default {
  name: 'CapabilitiesComponent',
  created () {
    this.CAPABILITIES = CAPABILITIES
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
