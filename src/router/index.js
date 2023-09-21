/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-18 15:13:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-21 20:11:03
 * @FilePath: \my-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 懒加载
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const Footprint = () => import('@/views/profile/children/footprint/Footprint.vue')
const Wallet = () => import('@/views/profile/children/wallet/Wallet.vue')
const Sign = () => import('@/views/sign/Sign.vue')
const Detail = () => import('@/views/detail/Detail.vue')
const Search = () => import('@/views/search/Search.vue')
const Login = () => import('@/views/login/Login.vue')


Vue.use(VueRouter)

// 创建映射关系
const routes = [
  {
    path: '/',
    redirect: '/login',
    meta: { show: false }
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/sign',
    component: Sign,
    meta: { show: true }
  },
  {
    path: '/category',
    component: Category,
    meta: { show: true }
  },
  {
    path: '/cart',
    component: Cart,
    meta: { show: true }
  },
  {
    path: '/profile',
    component: Profile,
    meta: { show: true }
  },
  {
    path: '/footprint',
    component: Footprint,
    meta: { show: true }
  },
  {
    path: '/wallet',
    component: Wallet,
    meta: { show: true }
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: { show: false }
  },
  {
    path: '/search',
    component: Search,
    meta: { show: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
