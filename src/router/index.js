import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/home/Home";
import Category from "../views/category/Category";
import Shoppingcart from "../views/shoppingcart/Shoppingcart";
import Profile from "../views/profile/Profile";
import Detail from "@/views/detail/Detail";
import xiaobei from "@/views/profile/xiaobei";
import WorkBench from "@/views/profile/WorkBench";
import Login from "@/views/login/Login";
import Address from "@/views/address/EditAddress";
import addressList from "@/views/address/AddressList";
import Order from "@/views/profile/Order";


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingcart',
    component: Shoppingcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/xiaobei',
    component: xiaobei
  },
  {
    path: '/workbench',
    component: WorkBench
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/addressList',
    component: addressList
  },
  {
    path: '/editAddress',
    component: Address
  },
  {
    path: '/order',
    component: Order
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
