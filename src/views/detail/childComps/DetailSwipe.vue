<template>
  <div class="slide">
    <van-swipe lazy-render
               indicator-color="#ff8198"
               :autoplay="3000"
               :stop-propagation="false">
      <van-swipe-item
        v-for="(image,index) in swipeImg"
        :key="index"
        class="swipe">
        <img :src="image" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  name: "DetailSwipe",
  data(){
    return{

    }
  },
  props:{
    swipeImg:{
      type:Array
    }
  },
  created() {
    // console.log(this.swipeImg);
  }
}
</script>

<style scoped>
.swipe{
  height: 35vh;
  overflow: hidden;
}
</style>
