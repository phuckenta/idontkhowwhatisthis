import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeScreen from '../views/admin/homescreen/Home.vue'
import ProductScreen from '../views/admin/ProductScreen/index.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/admin',
    name: 'HomeScreen',
    component: HomeScreen
  },
  {
    path: '/admin/product',
    name: 'ProductScreen',
    component: ProductScreen
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router