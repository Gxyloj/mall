import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe,SwipeItem,Sticky,Grid,GridItem,Icon,ConfigProvider } from "vant";


createApp(App)
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .use(Sticky)
  .use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(ConfigProvider)
  .mount('#app')
