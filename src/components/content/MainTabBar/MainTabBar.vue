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

    <TabbarItem path="login">
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

export default {
  name: "MainTabBar",
  components:{Tabbar,TabbarItem,iconSvg}
}
</script>

<style scoped>

</style>
