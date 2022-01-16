import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {Swipe,SwipeItem,Sticky,Grid,GridItem,Icon,ConfigProvider,Col,Row,NavBar,Button,ActionBar,ActionBarIcon,ActionBarButton,Checkbox, CheckboxGroup,Card,TreeSelect,Image as VanImage} from "vant";
import { Toast } from 'vant';
import store from './store'
import VueClipboard  from 'vue-clipboard2'
import VueCookies from 'vue-cookies'

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});

(function(win){
  //获得document对象
  var doc = win.document;
  var metaEL = doc.querySelector('meta[name="viewport"]')
  //viewport-fit = cover，设置占满整个屏幕
  // metaEL.setAttribute("content","initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover");
})(window)


// const app = createApp(App)
// app.config.globalProperties.$cookies = VueCookies;

createApp(App)
  .use(VueClipboard)
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
