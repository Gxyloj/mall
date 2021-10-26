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
    <div v-show="isTabFixed">
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl1"
                   class="fixed"></tab-control>
    </div>
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
                <img :src="image.image" @load.once="swiperImageLoad">
              </a>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!--    推荐-->
        <home-recommend-view :recommends="recommends  "></home-recommend-view>
        <home-popular></home-popular>


        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl2"></tab-control>


        <good-list :goods="goods[currentType].list">

        </good-list>

      </template>
    </scroll>
    <back-top @click="backClick" v-show="isBackTopShow"></back-top>

  </div>


</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata, getHomeGoods} from "@/network/home";
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
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomePopular,
    TabControl,
    test,
    GoodList,
    GoodListItem,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isBackTopShow: false,
      tabOffsetTop: 0,
      isLoad: false,
      isTabFixed: false,


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
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        if (type === 'pop') {
          this.$nextTick(() => {
            this.$refs.scroll.createScroll()
            // this.$refs.scroll.scroll.finishPullUp()
          })
        }
      })

    },
    tabClick(index) {
      switch (index) {
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      // console.log('backClick');
      this.$refs.scroll.scroll.scrollTo(0, 200, 500)
    },
    contentScroll(position) {
      // console.log(position);
      //判断backTop是否显示
      this.isBackTopShow = (-position.y) > 760
      //判断tabControl是否吸顶
      this.isTabFixed = position.y < -this.tabOffsetTop
      // console.log(this.isTabFixed);
    },
    loadMore() {
      console.log('上拉加载更多');
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.nextElementSibling.offsetTop);
      if (!this.isLoad) {
        this.tabOffsetTop = this.$refs.tabControl2.$el.nextElementSibling.offsetTop
        this.isLoad = true
      }
    }
  },
  mounted() {
  }


}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
}

.home-nav {
  background-color: #ff8198;
  color: #fff;
  flex-shrink: 0;
  /*!*position: fixed;*!*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}

.slide {
  width: 100%;

}

/*.tab-control1{*/
/*  position: -webkit-sticky;*/
/*  position: sticky;*/
/*!*  top:40px;*!   没用了*/
/*}*/

.fixed {
  position: fixed;
}


.content {
  height: calc(100vh - 42.91px - 45px);
  /*margin-top: 44px;*/
  overflow: hidden;
}

</style>
