<!-- src/components/HouseItem.vue -->
<template>
    <b-card title="매물" class="mb-3">
      <p>🏠 {{  house.name }} - {{  house.price }}만원</p>
      <p>수량 : {{ count }}</p>
      <p>2배 수량 : {{ doubleCount }}</p>

      <button class="btn btn-primary" @click="plus">+ 1</button>
      <button class="btn btn-danger" @click="minus">- 1</button>
    </b-card>
</template>
  

<script setup>
// house라는 데이터를 부모가 내려줄 것이라고 선언합니다.
// defineProps()로 받아옵니다.
// defineProps(['house'])

const props = defineProps(['house'])

import { ref, computed } from 'vue'
const count = ref(props.house.opp)

function plus() {
count.value++
}

function minus() {
count.value--
}

const doubleCount = computed(() => {
return count.value * 2
})
</script>
  