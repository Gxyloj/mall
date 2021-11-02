import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe,SwipeItem,Sticky,Grid,GridItem,Icon,ConfigProvider,Col,Row,NavBar,Button} from "vant";
import store from './store'


createApp(App)
  .use(router)
  .use(store)
  .use(Swipe)
  .use(SwipeItem)
  .use(Sticky)
  .use(Grid)
  .use(GridItem)
  .use(Icon)
  .use(Col)
  .use(Row)
  .use(NavBar)
  .use(Button)
  .use(ConfigProvider)
  .mount('#app')
