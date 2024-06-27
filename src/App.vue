<template>
  <div class="landing">
    <Header :texts="TEXTS" :popup-menu="POPUP_MENU" />
    <router-view/>
    <Review />
    <Footer :text-copyright="TEXTS.copyright" />
  </div>
</template>

<script>
import { TEXTS, POPUP_MENU } from '@/components/constants'
import Header from '@/components/HeaderComponent'
import Footer from '@/components/FooterComponent'
import Review from '@/components/ReviewComponent/index.vue'

export default {
  name: 'App',
  components: {
    Review,
    Header,
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
