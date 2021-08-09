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
    path: '/userhome',
    name: 'UserHome',
    component: () => import(/* webpackChunkName: "UserHome" */ "@/views/UserHome.vue")
  },
  {
    path: '/userworkshops',
    name: 'UserWorkShops',
    component: () => import(/* webpackChunkName: "UserWorkShops" */ "@/views/UserWorkShops.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
