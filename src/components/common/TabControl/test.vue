<template>
  <div class="nav">
    <!-- 标题列表 -->
    <div class="nav-list">
      <div v-for="(item, index) in navList" :key="item" @click="changeTitle(index)"
           :class="{ 'nav-list--active': index === active }">
        {{ item }}
      </div>
    </div>
    <!-- 下划线 -->
    <div class="nav-line">
      <div :style="{transform: 'translateX(' + translateX + 'px) translateX(-50%)',}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      navList: ['首页', '推荐', '关注', '会员', '消息'],
      translateX: 0,
      active: 0,
    }
  },
  methods: {
    // /**
    //  * 点击切换标题
    //  * @param {number} index 菜单序列(点击的第index个)
    //  */
    changeTitle(index) {
      this.active = index;
      this.setUnderLine();
    },
    /**
     * 设置下划线
     */
    setUnderLine() {
      let width = document.documentElement.clientWidth;
      let slidingWidth = (width / this.navList.length).toFixed(2);
      let halfSlidingWidth = (slidingWidth / 2).toFixed(2);
      this.translateX = Number(halfSlidingWidth) + Number(slidingWidth * this.active);
    }
  },
  mounted() {
    this.setUnderLine();
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: #fff;
}

.nav .nav-list {
  margin: 0 auto;
  max-width: 600Px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
}

.nav .nav-list>div {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC, sans-serif;
  font-weight: 400;
  color: #666;
  line-height: 16px;
  cursor: pointer;
  text-align: center;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  -webkit-background-clip: text;
  /*-webkit-text-fill-color: transparent;*/

}

.nav .nav-list .nav-list--active {
  font-family: PingFangSC-Semibold, PingFang SC, sans-serif;
  font-weight: bold;
  color: #333333;
  transition: all 0.3s;
  /*background-color: #FFE53B;*/
  /*background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);*/
}

.nav-line {
  margin: 0 auto;
}

.nav-line>div {
  width: 18px;
  height: 4px;
  background-color: #4158D0;
  /*background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);*/
  border-radius: 2px;
  transition-duration: 0.3s;
  position: relative;
  top: -7px;
}
</style>
