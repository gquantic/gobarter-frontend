<template>
  <router-link :to="{name: 'offers.show', params: {id: item.id}}">
    <div class="offer-item-list">
      <h3>{{ item.title }}</h3>
      <p class="mb-0">Нужно: {{ item.need }}</p>
      <p class="mb-0">Готов предложить: {{ item.offer }}</p>

      <div class="d-flex justify-content-end">
        <img src="@/assets/icons/arrow-right.svg" class="arrow-right" width="25px" alt="">
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ['item', 'id']
}
</script>