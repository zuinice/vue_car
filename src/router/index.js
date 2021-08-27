/*
 * @Author: your name
 * @Date: 2021-08-24 10:08:55
 * @LastEditTime: 2021-08-24 16:03:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_car\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index'),
    children: [
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user/user.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
