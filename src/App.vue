<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component"/>
      </keep-alive>
    </router-view>

    <main-tab-bar v-show="showTabBar"></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from "components/content/MainTabBar/MainTabBar";
import Home from "@/views/home/Home"

export default {
  name: 'App',
  components: {MainTabBar, Home},
  computed: {
    showTabBar() {
      return this.$route.path !== '/xiaobei' &&
        this.$route.path !== '/workbench' &&
        this.$route.path.slice(1, 7) !== 'detail'&&
        this.$route.path!=='/love03'&&
        this.$route.path!=='/love0303'&&
        this.$route.path!=='/ldc'&&
        this.$route.path!=='/login'&&
        this.$route.path!=='/order'
      // this.$route.path!=='/shoppingcart'
    }
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
@import "assets/css/base.css";
/**{*/
/*  box-sizing: border-box;*/
/*}*/
</style>
