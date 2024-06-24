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
      </div>
    </header>
    <div class="banner">
      <div class="banner__text-block">
        <div class="banner__title">{{ TEXTS.banner_title }}</div>
        <div class="banner__subtitle" v-html="TEXTS.banner_subtitle"></div>
      </div>
    </div>
    <div class="sections">
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
    </div>
  </div>
</template>

<script>
import { TEXTS, SECTIONS } from './constants'

export default {
  name: 'LandingComponent',
  props: {
    msg: String
  },
  created () {
    this.TEXTS = TEXTS
    this.SECTIONS = SECTIONS
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
