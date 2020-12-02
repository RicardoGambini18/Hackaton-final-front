import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/especialidad/:id',
    name: 'Especialidad',
    component: () => import('../views/Especialidad.vue')
  },
  {
    path: '/acceso/:view',
    name: 'Acceso',
    component: () => import('../views/Acceso.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/Carrito.vue')
  },
  {
    path: '/pasarela',
    name: 'Pasarela',
    component: () => import('../views/Pasarela.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
