import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeView.vue'
import ListView from '@/components/ListView.vue'
import SpecialView from '@/components/SpecialView.vue'
import DetailView from '@/components/DetailView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/list', name: 'List', component: ListView },
  { path: '/special', name: 'Special', component: SpecialView },
  { path: '/detail/:id', name: 'Detail', component: DetailView }  
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
