<template>
  <Tabbar>
    <TabbarItem path="/home">
      <template v-slot:item-icon>
        <icon-svg icon-class="mall"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </TabbarItem>

    <TabbarItem path="category">
      <template v-slot:item-icon>
        <icon-svg icon-class="category"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </TabbarItem>

    <TabbarItem path="shoppingcart">
      <template v-slot:item-icon>
        <icon-svg icon-class="gouwuche"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </TabbarItem>

    <TabbarItem @click="profile" path="profile">
      <template v-slot:item-icon>
        <icon-svg icon-class="profile"></icon-svg>
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </TabbarItem>
  </Tabbar>
</template>

<script>

import 'assets/img/icon'
import Tabbar from "@/components/common/tabbar/Tabbar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";
import iconSvg from "@/components/common/iconSvg";
import utils from "@/common/utils/utils.ts";

export default {
  name: "MainTabBar",
  components:{Tabbar,TabbarItem,iconSvg},
  methods:{
    profile(){
      if (utils.getCookie('username').length !== 0){
        console.log('有')
        this.$router.push('/profile')
      }else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

</style>
