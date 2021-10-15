import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe,SwipeItem} from "vant";


createApp(App)
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .mount('#app')
