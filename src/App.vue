<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar v-show="this.$route.path ==='xiaobei'"></main-tab-bar>
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
  mounted() {

  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
