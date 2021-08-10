import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'login' */ '@/components/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: 'admin' */ '@/views/admin.vue')
  },
  {
    path: '/admin/users',
    name: 'users',
    component: () => import(/* webpackChunkName: 'users' */ '@/views/users.vue')
  },
  {
    path: '/admin/workshops',
    name: 'workshops',
    component: () => import(/* webpackChunkName: 'workshops' */ '@/views/workshops.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
