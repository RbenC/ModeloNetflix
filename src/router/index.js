import Vue from 'vue'
import VueRouter from 'vue-router'
import Series from '../views/Series.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Series',
    component: Series
  },
  {
    path: '/misfavoritos',
    name: 'MisFavoritos',
    component:() => import('../views/MisFavoritos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
