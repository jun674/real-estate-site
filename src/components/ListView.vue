<template>
    <div class="container">
        <h2>부동산 매물 목록</h2>
        <div class="row">
            <div class="col-md-4" v-for="house in houses" :key="house.id">
                <!-- <HouseItem :house="house" /> -->
                <!-- <router-link :to="`/detail/${house.id}`"> -->
                <router-link :to="{ name: 'Detail', params: { id: house.id } }">
                    {{ house.name }} 상세보기
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import HouseItem from './HouseItem.vue'
const houses = [
  { id: 1, name: "서울 아파트", price: 50000, opp: 3},
  { id: 2, name: "부산 오피스텔", price: 30000, opp: 2},
  { id: 3, name: "제주 펜션", price: 20000, opp: 4}
]

// import { onMounted } from 'vue'
// import { onUnmounted } from 'vue'

// onMounted(() => {
//   alert('hello')
// })

// onUnmounted(() => {
//     alert('Goodbye~')
// })
</script>

