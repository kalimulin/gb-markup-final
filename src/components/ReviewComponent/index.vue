<template>
  <section class="review">
    <div class="container">
      <div>
        <div class="review__ava">
          <img
            src="img/avatar1.png"
            alt="user"
          >
        </div>
        <div class="review__text">{{ TEXTS.review_text }}</div>
      </div>
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
</template>

<script>
import { TEXTS } from '@/components/constants'

export default {
  name: 'ReviewComponent',
  created () {
    this.TEXTS = TEXTS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
