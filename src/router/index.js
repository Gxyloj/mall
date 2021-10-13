import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home/Home";
import Category from "../views/category/Category";
import Shoppingcart from "../views/shoppingcart/Shoppingcart";
import Profile from "../views/profile/Profile";


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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
