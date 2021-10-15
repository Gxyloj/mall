<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>


    <!--    轮播图-->
    <!--        <home-swiper :banners="banners"-->
    <!--                     ref="hSwiper"></home-swiper>-->
    <div class="slide">
      <van-swipe lazy-render indicator-color="#ff8198">
        <van-swipe-item v-for="(image, index) in banners" :key="image">
          <a :href="image.link">
            <img :src="image.image">
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
<!--    推荐-->
    <home-recommend-view :recommends="recommends  "></home-recommend-view>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";


export default {
  name: "Home",
  components: {NavBar, HomeSwiper,HomeRecommendView},
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })

  },
  setup() {
    const images = [
      'https://img.yzcdn.cn/vant/apple-1.jpg',
      'https://img.yzcdn.cn/vant/apple-2.jpg',
    ];
    return {images};
  },
  // mounted() {
  //   this.wWidth = window.innerWidth; // 屏幕宽度
  //   console.log("宽度", this.wWidth);
  // }


}
</script>

<style scoped>
.home-nav {
  background-color: #ff8198;
  color: #fff;
}

.slide {
  width: 100%;
  flex-shrink: 0;
}


</style>
