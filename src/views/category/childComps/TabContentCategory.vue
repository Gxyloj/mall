<template>
  <!--  <van-image-->
  <!--    v-if="activeIndex === 0"-->
  <!--    src="https://img.yzcdn.cn/vant/apple-1.jpg"-->
  <!--  />-->
  <!--  <van-image-->
  <!--    v-if="activeIndex === 1"-->
  <!--    src="https://img.yzcdn.cn/vant/apple-2.jpg"-->
  <!--  />-->

  <div class="content">
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="(item,index) in contentList" :key="index">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>

      </van-grid-item>
      <div style="width: 100%;height: 43px">

      </div>
    </van-grid>
  </div>

</template>

<script>

export default {
  name: "TabConentCategory",
  props: {
    activeIndex: {
      type: Number
    },
    categoryKey: {
      type: Number
    },
    contentList: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .content img{
    width: 15vw;
  }
</style>
