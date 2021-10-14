<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>


<!--    轮播图-->
    <home-swiper :banners="banners"
                 ref="hSwiper"></home-swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";




export default {
  name: "Home",
  components: {NavBar,HomeSwiper},
  data(){
    return {
      banners:[],
      recommends:[],
      data: [
        "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00693-2745.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2190440116,1436403087&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3593656793,3600757928&fm=26&gp=0.jpg",
      ],
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


}
</script>

<style scoped>
.home-nav {
  background-color: #ff8198;
  color: #fff;
}
</style>
