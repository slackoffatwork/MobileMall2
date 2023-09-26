/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-18 15:13:59
 * @LastEditors: “YZ” “929876936@qq.com”
 * @LastEditTime: 2023-09-26 20:57:37
 * @FilePath: \my-project\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";

// 获取原型对象push函数
const originalPush = VueRouter.prototype.push;

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace;

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};

// 懒加载
const Home = () => import("@/views/home/Home.vue");
const Category = () => import("@/views/category/Category.vue");
const Cart = () => import("@/views/cart/Cart.vue");
const Profile = () => import("@/views/profile/Profile.vue");
const Footprint = () =>
  import("@/views/profile/children/footprint/Footprint.vue");
const Wallet = () => import("@/views/profile/children/wallet/Wallet.vue");
const Sign = () => import("@/views/sign/Sign.vue");
const Detail = () => import("@/views/detail/Detail.vue");
const Search = () => import("@/views/search/Search.vue");
const Login = () => import("@/views/login/Login.vue");
const AddressList = () => import("@/views/address/AddressList.vue");
const AddressEdit = () => import("@/views/address/AddressEdit.vue");

Vue.use(VueRouter);

// 创建映射关系
const routes = [
  {
    path: "/",
    redirect: "/login",
    meta: { show: false },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/sign",
    component: Sign,
    meta: { show: true },
  },
  {
    path: "/category",
    component: Category,
    meta: { show: true },
  },
  {
    path: "/cart",
    component: Cart,
    meta: { show: false },
  },
  {
    path: "/profile",
    component: Profile,
    meta: { show: true },
  },
  {
    path: "/footprint",
    component: Footprint,
    meta: { show: true },
  },
  {
    path: "/wallet",
    component: Wallet,
    meta: { show: true },
  },
  {
    path: "/detail/:id",
    component: Detail,
    meta: { show: false },
  },
  {
    path: "/search",
    component: Search,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/addressList",
    component: AddressList,
    meta: { show: false },
  },
  {
    path: "/addressEdit",
    component: AddressEdit,
    meta: { show: false },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
