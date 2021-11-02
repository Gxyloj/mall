<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar v-show="showTabBar"></main-tab-bar>
  </div>
</template>
<!--
/xiaobei
-->
<script>

import MainTabBar from "components/content/MainTabBar/MainTabBar";
import Home from "@/views/home/Home"

export default {
  name: 'App',
  components: {MainTabBar, Home},
  computed:{
    showTabBar(){
      return this.$route.path!=='/xiaobei'&&
        this.$route.path!=='/profile'&&
        this.$route.path!=='/workbench'&&
        this.$route.path.slice(1,7)!=='detail'
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
