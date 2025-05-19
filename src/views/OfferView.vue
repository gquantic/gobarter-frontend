<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-3">
        <h1>{{ offer?.title }}</h1>
      </div>
      <div class="col-12">
        <p class="mb-0">Нужно: {{ offer?.need }}</p>
        <p class="mb-0">Готов предложить: {{ offer?.offer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import axios from 'axios'

const route = useRoute()
const offer = ref(null)

onMounted(async () => {
  console.log('Получен ID:', route.params.id)

  try {
    const response = await axios.get(`https://gobarter.ru/api/v1/offers/${route.params.id}`)
    offer.value = response.data
  } catch (error) {
    console.error('Ошибка при загрузке:', error)
  }
})
</script>