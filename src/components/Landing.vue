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
  </div>
</template>

<script>
export default {
  name: 'LandingComponent',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
