import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from './../firebase'

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
    component: () => import('../views/Acceso.vue'),
    meta:{
      requiresNoAuth:true
    }
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: () => import('../views/Carrito.vue')
  },
  {
    path: '/pasarela',
    name: 'Pasarela',
    component: () => import('../views/Pasarela.vue'),
    meta:{
      requiresAuth:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  let reqAuth = to.matched.some(ruta=>ruta.meta.requiresAuth);
  let user = auth.currentUser;
  let reqNoAuth = to.matched.some(ruta=>ruta.meta.requiresNoAuth);

  if( (reqAuth) && (!user) ){
    next({
      path: '/acceso/iniciar-sesion',
    })
  }
  else if( (reqNoAuth) && (user) ){

    next({
      path: '/',
    })
  }
  else{
    next()
  }
})

export default router
