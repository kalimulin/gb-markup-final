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
    <router-view/>
    <footer class="footer">
      <div class="container">
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
      </div>
    </footer>
  </div>
</template>

<script>
import { TEXTS } from '@/components/constants'

export default {
  name: 'App',
  created () {
    this.TEXTS = TEXTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
