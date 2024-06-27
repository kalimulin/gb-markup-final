<template>
  <div class="landing">
    <header class="landing__header header">
      <div class="container header__wrap">
        <div class="header__logo">
          <router-link to="/">
            <img
              src="@/assets/img/logo.png"
              alt="logo"
            >
          </router-link>
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
            @click="openMenu = !openMenu"
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
        <nav
          v-if="openMenu"
          class="header__popup-menu popup-menu"
        >
          <div
            class="popup-menu__close"
            @click="openMenu = false"
          >
            <img
              src="@/assets/img/icon-close.svg"
              alt="user"
            >
          </div>
          <div class="popup-menu__title">{{ TEXTS.popupMenuTitle }}</div>
          <ul class="popup-menu__items">
            <li
              v-for="({ title, submenu }, number) in POPUP_MENU"
              :key="number"
              class="popup-menu__menu-item"
            >
              <div class="popup-menu__menu-item-title">
                {{ title }}
              </div>
              <ul
                v-if="submenu"
                class="popup-menu__submenu"
              >
                <li
                  v-for="({ title, path }, number) in submenu"
                  :key="number"
                  class="popup-menu__submenu-item"
                  @click="openMenu = false"
                >
                  <router-link :to="path" >{{ title }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view/>
    <Footer :text-copyright="TEXTS.copyright" />
  </div>
</template>

<script>
import { TEXTS, POPUP_MENU } from '@/components/constants'
import Footer from '@/components/FooterComponent'

export default {
  name: 'App',
  components: {
    Footer
  },
  data: () => {
    return {
      openMenu: false
    }
  },
  created () {
    this.TEXTS = TEXTS
    this.POPUP_MENU = POPUP_MENU
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
