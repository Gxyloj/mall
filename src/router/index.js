import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home/Home";
import Category from "../views/category/Category";
import Shoppingcart from "../views/shoppingcart/Shoppingcart";
import Profile from "../views/profile/Profile";
import Detail from "@/views/detail/Detail";
import xiaobei from "@/views/profile/xiaobei";
import WorkBench from "@/views/profile/WorkBench";
import lsls from "@/views/03/03"
import lslsls from "@/views/03/0303"


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component: Category
  },
  {
    path:'/shoppingcart',
    component:Shoppingcart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/xiaobei',
    component: xiaobei
  },
  {
    path: '/workbench',
    component: WorkBench
  },
  {
    path:'/love03',
    component:lsls,
    meta:{
      title:'林珊 😘 '
    }

  },
  {
    path: '/love0303',
    component: lslsls,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
