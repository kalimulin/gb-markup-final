<template>
  <div class="registration-page">
    <Breadcrumbs title="REGISTRATION" path="" />
    <div class="container">
      <div class="registration-page__content">
        <div class="registration-page__form">
          <form class="form">
            <div class="form__group">
              <div class="form__label">Your name</div>
              <input class="form__field" type="text" name="firstName" placeholder="First Name">
              <input class="form__field" type="text" name="lastName" placeholder="Last Name">
            </div>
            <div class="form__group">
              <div class="form__radio-buttons">
                <div class="form__radio-button">
                  <input type="radio" name="gender"> Male
                </div>
                <div class="form__radio-button">
                  <input type="radio" name="gender"> Female
                </div>
                <div class="form__radio-button">
                  <input type="radio" name="gender"> Other
                </div>
              </div>
            </div>
            <div class="form__group">
              <div class="form__label">Login details</div>
              <input class="form__field" type="email" name="email" placeholder="Email">
              <input class="form__field" type="text" name="password" placeholder="Password">
              <div class="form__tip">
                Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
              </div>
            </div>
            <button type="submit" class="registration-page__button">
              <span>Join Now</span>
              <IconArrow/>
            </button>
          </form>
        </div>
        <div class="registration-page__perks perks">
          <div class="perks__title">
            LOYALTY HAS ITS PERKS
          </div>
          <p>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
          <div class="perks__list">
            <div class="perks__list-item" v-for="(perk, number) in perks" :key="number">
              <IconCheck/>
              <span>{{ perk }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/BreadcrumbsComponent/index.vue'
import IconArrow from '@/svg/icon-arrow.vue'
import IconCheck from '@/svg/icon-check.vue'

export default {
  name: 'RegistrationPage',
  components: { IconCheck, IconArrow, Breadcrumbs },
  data () {
    return {
      perks: [
        '15% off welcome offer',
        'Free shipping, returns and exchanges on all orders',
        '$10 off a purchase on your birthday',
        'Early access to products',
        'Exclusive offers & rewards'
      ]
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
