<template>
    <div>
      <h2>매물 상세페이지 🏠</h2>
      <p>매물 ID: {{ id }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'  
  import { onBeforeRouteLeave } from 'vue-router'
  
  const route = useRoute()  
  const id = route.params.id

  onBeforeRouteLeave((to, from, next) => {
    const confirmLeave = confirm('나갈꺼야?');
    if(confirmLeave){
      next()
    } else{
      next(false)
    }
  })
  </script>