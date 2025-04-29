<!-- <template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script> -->
<template>
  <div class="container mt-5">
    <h1>초간단 부동산 사이트</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/list">매물 목록</router-link> |
      <router-link to="/special">특가 매물</router-link>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>