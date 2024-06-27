<template>
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
      <router-link
        to="registration"
        class="header__user"
      >
        <img
          src="@/assets/img/icon-user.svg"
          alt="user"
        >
      </router-link>
      <router-link
        to="/cart"
        class="header__cart"
      >
        <img
          src="@/assets/img/icon-cart.svg"
          alt="user"
        >
      </router-link>
      <div
        v-if="openMenu"
        class="header__overlay"
        @click="openMenu = false"
      ></div>
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
        <div class="popup-menu__title">{{ texts.popupMenuTitle }}</div>
        <ul class="popup-menu__items">
          <li
            v-for="({ title, submenu, path }, number) in popupMenu"
            :key="number"
            class="popup-menu__menu-item"
          >
            <div
              class="popup-menu__menu-item-title"
              @click="openMenu = false"
            >
              <router-link :to="path">{{ title }}</router-link>
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
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    texts: {
      type: Object,
      default: () => {}
    },
    popupMenu: {
      type: Array,
      default: () => []
    }
  },
  data: () => {
    return {
      openMenu: false
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
