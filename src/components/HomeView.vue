<template>
<div>
    <h2>홈 화면입니다 🏠</h2>
    <!-- <button class="btn btn-primary" @click="goList">리스트</button> -->
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter(); //라우터 인스턴스 가져오기

function goList() { 
    router.push({ name: 'List' });
}
</script>

