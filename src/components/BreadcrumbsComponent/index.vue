<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs__title">{{ title }}</div>
      <div class="breadcrumbs__path"  v-html="path"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbsComponent',
  props: {
    title: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
