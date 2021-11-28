import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe,SwipeItem,Sticky,Grid,GridItem,Icon,ConfigProvider,Col,Row,NavBar,Button,ActionBar,ActionBarIcon,ActionBarButton,Checkbox, CheckboxGroup,Card,TreeSelect,Image as VanImage} from "vant";
import { Toast } from 'vant';
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
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Card)
  .use(ConfigProvider)
  .use(Toast)
  .use(TreeSelect)
  .use(VanImage)
  .mount('#app')
