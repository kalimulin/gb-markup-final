<template>
  <div class="landing">
    <header class="landing__header header">
      <div class="container header__wrap">
        <div class="header__logo">
          <img
            src="@/assets/img/logo.png"
            alt="logo"
          >
        </div>
        <div class="header__search">
          <img
            src="@/assets/img/icon-search.svg"
            alt="search"
          >
        </div>
        <div class="header__menu">
          <img
            src="@/assets/img/icon-hamburger.svg"
            alt="menu"
          >
        </div>
        <div class="header__user">
          <img
            src="@/assets/img/icon-user.svg"
            alt="user"
          >
        </div>
        <div class="header__cart">
          <img
            src="@/assets/img/icon-cart.svg"
            alt="user"
          >
        </div>
      </div>
    </header>
    <section class="banner">
      <div class="banner__left">
        <img
          src="/img/banner_man.png"
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
        <div
          v-for="{ str1, str2, classSuffix } in SECTIONS"
          :key="str2"
          class="sections__item section"
          :class="`section_${classSuffix}`"
        >
          <div class="section__text">
            <div class="section__text1">{{ str1 }}</div>
            <div class="section__text2">{{ str2 }}</div>
          </div>
        </div>
      </div>
    </section>
    <section class="featured">
      <div class="container">
        <div class="featured__title">{{ TEXTS.featured_title }}</div>
        <div class="featured__subtitle">{{ TEXTS.featured_subtitle }}</div>
        <div class="featured__items">
          <div
            v-for="({title, desc, price}, number) in FEATURED_ITEMS"
            :key="number"
            class="featured__item"
          >
            <img :src="`img/featured/${number+1}.jpg`">
            <div class="featured__item-text">
              <div class="featured__item-title">{{ title }}</div>
              <div class="featured__item-desc">{{ desc }}</div>
              <div class="featured__item-price">{{ price }}</div>
            </div>
          </div>
        </div>
        <div class="featured__browse-all">
          <span>{{ TEXTS.browse_all }}</span>
        </div>
      </div>
    </section>
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
    <section class="review">
      <div class="container">
        <div class="review__ava">
          <img
            src="img/avatar1.png"
            alt="user"
          >
        </div>
        <div class="review__text">{{ TEXTS.review_text }}</div>
        <div class="subscribe">
          <div class="subscribe__title">{{ TEXTS.subscribe_title }}</div>
          <div class="subscribe__subtitle">{{ TEXTS.subscribe_subtitle }}</div>
          <form class="subscribe__email">
            <input type="email" class="subscribe__email-field" :placeholder="TEXTS.enter_email" />
            <div class="subscribe__email-submit">{{ TEXTS.subscribe }}</div>
          </form>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__socials">
        <div class="footer__social">
          <img
            src="@/assets/img/socials/facebook.svg"
            class="footer__social-img"
            alt="social"
          >
        </div>
        <div class="footer__social">
          <img
            src="@/assets/img/socials/intstagram.svg"
            class="footer__social-img"
            alt="social"
          >
        </div>
        <div class="footer__social">
          <img
            src="@/assets/img/socials/pinterest.svg"
            class="footer__social-img"
            alt="social"
          >
        </div>
        <div class="footer__social">
          <img
            src="@/assets/img/socials/twitter.svg"
            class="footer__social-img"
            alt="social"
          >
        </div>
      </div>
      <div class="footer__copyright">{{ TEXTS.copyright }}</div>
    </footer>
  </div>
</template>

<script>
import { TEXTS, SECTIONS, FEATURED_ITEMS, CAPABILITIES } from './constants'

export default {
  name: 'LandingComponent',
  props: {
    msg: String
  },
  created () {
    this.TEXTS = TEXTS
    this.SECTIONS = SECTIONS
    this.FEATURED_ITEMS = FEATURED_ITEMS
    this.CAPABILITIES = CAPABILITIES
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
