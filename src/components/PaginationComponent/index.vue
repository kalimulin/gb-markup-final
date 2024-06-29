<template>
  <div class="pagination">
    <div class="pagination__prev">
      <img
        src="@/assets/img/chevron-left.svg"
        class="pagination__arrow"
      >
    </div>
    <div
      v-for="(page, number) in [1,2,3,4,5]"
      :key="number"
      class="pagination__item"
      :class="{'pagination__item_active': page === 1}"
    >
      {{ page }}
    </div>
    <div class="pagination__dots">.....</div>
    <div class="pagination__last">20</div>
    <div class="pagination__next">
      <img
        src="@/assets/img/chevron-left.svg"
        class="pagination__arrow pagination__arrow_right"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent'
}
</script>

<style lang="scss" src="./style.scss"></style>
