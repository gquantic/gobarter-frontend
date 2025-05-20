<template>
  <nav class="py-2 top-menu border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Помощь</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">Разместить объявление</router-link>
        </li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><a href="javascript:void(0);" type="button" data-bs-toggle="modal" data-bs-target="#loginModal" class="nav-link">Авторизация</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Регистрация</a></li>
      </ul>
    </div>
  </nav>
  <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none border-bottom-0">
        <span class="fs-4">GoBarter</span>
      </a>
      <form class="col-12 col-lg-5 mb-3 mb-lg-0">
        <input type="search" class="form-control" placeholder="Поиск по объявлениям..." aria-label="Поиск по объявлениям">
      </form>
    </div>
  </header>
  <router-view/>

  <AuthComponents/>
</template>

<script setup>
import AuthComponents from "@/components/Auth/AuthComponents.vue";
</script>
<style lang="scss">
@import '@/assets/scss/app';
@import '@/assets/scss/theme.min.css';
</style>
