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
    <scroll class="content"
            :goods="goods[currentType].list"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            @pullingUp="loadMore"
            :pull-up-load="true">
      <template v-slot>

        <div class="slide">
          <van-swipe lazy-render indicator-color="#ff8198" :autoplay="3000" :stop-propagation="false">
            <van-swipe-item v-for="(image, index) in banners" :key="image">
              <a :href="image.link">
                <img :src="image.image">
              </a>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!--    推荐-->
        <home-recommend-view :recommends="recommends  "></home-recommend-view>
        <home-popular></home-popular>
        <van-sticky :offset-top="44">
          <tab-control :titles="['流行','新款','精选']"
                       class="tab-control1"
                       @tabClick="tabClick"></tab-control>
        </van-sticky>
        <good-list :goods="goods[currentType].list">

        </good-list>

      </template>
    </scroll>
    <back-top @click="backClick" v-show="isBackTopShow"></back-top>

  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import HomeSwiper from "@/views/home/childComps/HomeSwiper_coderwhy";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import HomePopular from "@/views/home/childComps/HomePopular";
import TabControl from "@/components/common/TabControl/TabControl";
import test from "@/components/common/TabControl/test";
import GoodList from "@/components/content/Goods/GoodList";
import GoodListItem from "@/components/content/Goods/GoodListItem";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/BackTop/BackTop";

export default {
  name: "Home",
  components: {NavBar, HomeSwiper,HomeRecommendView,HomePopular,TabControl,test,GoodList,GoodListItem,Scroll,BackTop},
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isBackTopShow:false,

    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$nextTick(() => {
          this.$refs.scroll.createScroll()
          this.$refs.scroll.scroll.finishPullUp()
        })
      })

    },
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },
    backClick(){
      // console.log('backClick');
      this.$refs.scroll.scroll.scrollTo(0,200,500)
    },
    contentScroll(position){
      // console.log(position);
      this.isBackTopShow = (-position.y) > 760
    },
    loadMore(){
      console.log('上拉加载更多');
      // this.getHomeGoods(this.currentType)
      // this.$refs.scroll.scroll.refresh()
    }
  },
  // mounted() {
  //   this.wWidth = window.innerWidth; // 屏幕宽度
  //   console.log("宽度", this.wWidth);
  // }


}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
}
.home-nav {
  background-color: #ff8198;
  color: #fff;
  flex-shrink: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.slide {
  width: 100%;

}
.tab-control1{
  position: -webkit-sticky;
  position: sticky;
  top:40px;
}

.content{
  height: calc(100vh - 42.91px - 45px);
  margin-top: 44px;
  overflow: hidden;
}

</style>
