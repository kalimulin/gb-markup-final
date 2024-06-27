<template>
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
      <div class="footer__copyright">{{ textCopyright }}</div>
    </div>
  </footer>
</template>

<script>
import { TEXTS } from '@/components/constants'

export default {
  name: 'FooterComponent',
  props: {
    textCopyright: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      openMenu: false
    }
  },
  created () {
    this.TEXTS = TEXTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
