<template>
  <div ref="detail-container" @scroll="handleScroll" class="detail-container">
    <van-sticky>
      <detail-nav @itemClick="itemClick" ref="nav"></detail-nav>
    </van-sticky>
    <detail-swipe :swipeImg="swipeImg" @detailImgLoad="detailImgLoad"></detail-swipe>
    <detail-base-info :itemInfo="itemInfo"
                      :salesInfo="salesInfo"
                      :shopInfo="shopInfo"
                      :detailInfo="detailInfo"></detail-base-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-image-info :detailInfo="detailInfo" @detailImgLoad="detailImgLoad"></detail-image-info>
    <detail-parameter :detailParameter="detailParameter" ref="parameter"></detail-parameter>
    <detail-comment :detailComment="detailComment" ref="comment"></detail-comment>
    <good-list :goods="recommend" ref="recommend"></good-list>
    <back-top class="back-top1"
              v-show="flag"
              @click="scrollToTop(0)"></back-top>
  </div>


</template>

<script>
import DetailNav from "@/views/detail/childComps/DetailNav";
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailImageInfo from "@/views/detail/childComps/DetailImageInfo";
import DetailParameter from "@/views/detail/childComps/DetailParameter";
import DetailComment from "@/views/detail/childComps/DetailComment";
import BackTop from "@/components/content/BackTop/BackTop";
import GoodList from "@/components/content/Goods/GoodList";
import {getDetail, getRecommend} from "@/network/detail";
import {debounce, scrollToTop} from "@/common/utils";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailParameter,
    DetailComment,
    GoodList,
    BackTop
  },
  data() {
    return {
      iid: null,
      swipeImg: [],
      itemInfo: {},
      salesInfo: [],
      shopInfo: {},
      detailInfo: {},
      detailParameter: {},
      detailComment: {},
      recommend: [],
      flag: false,
      navIndex: 0,
      currentIndex:0,
      offsetTop: [],
    }
  },
  created() {
    //保存传入的商品id
    this.iid = this.$route.params.iid

    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      //轮播图数据
      this.swipeImg = res.result.itemInfo.topImages
      //商品标题等 数据
      this.itemInfo = res.result.itemInfo
      //销量等 数据
      this.salesInfo = res.result.columns
      //店铺等 信息
      this.shopInfo = res.result.shopInfo
      //详情等 信息
      this.detailInfo = res.result.detailInfo
      //参数信息
      this.detailParameter = res.result.itemParams
      //评价信息
      this.detailComment = res.result.rate.list[0]
      // console.log(this.detailComment);
    })
    //请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommend = res.data.list
      console.log(this.recommend);
    })


  },
  mounted() {

    //滚动高度大于一页显示返回最上按钮
    window.addEventListener('scroll', debounce(() => {
      let scrollTop = document.documentElement.scrollTop
      this.flag = scrollTop > window.screen.availHeight;//一屏
      // console.log(scrollTop);

      //改变对应的currentIndex
      // this.offsetTop.forEach(i => {
      //   // console.log(i)
      //   if (scrollTop > this.offsetTop[i] && scrollTop < this.offsetTop[i+1]){
      //     console.log(i);
      //   }
      // })
      // let length = this.offsetTop.length
      // for (let i = 0;i< length;i++){
      //   let iPos = this.offsetTop[i];
      //   if ((scrollTop + 44) >= iPos && (scrollTop + 44) < this.offsetTop[i+1]){
      //     if (this.currentIndex !== i){
      //       this.currentIndex = i
      //       this.$refs.nav.currentIndex = this.currentIndex
      //     }
      //     break;
      //   }
      //
      // }
      let length = this.offsetTop.length
      for (let i = 0;i < length;i++){
        if (this.currentIndex !== i
          && ((i < length -1 && (scrollTop + 44 + 8) >= this.offsetTop[i]
            && (scrollTop + 44 + 8) < this.offsetTop[i+1])
            || (i === length - 1 && (scrollTop + 44 + 8) >= this.offsetTop[i])))
        {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

    }, 50))


  },
  updated() {

  },
  methods: {
    scrollToTop(position) {
      scrollToTop(position)
    },
    detailImgLoad() {
      this.getOffSetTop()

    },
    itemClick(index) {
      // console.log(index);
      document.documentElement.scrollTo({
        top: this.offsetTop[index] - 44 - 8,
        left: 0,
        behavior: 'smooth'
      })
    },
    getOffSetTop() {
      this.offsetTop = []
      this.offsetTop.push(0)
      this.offsetTop.push(this.$refs.parameter.$el.offsetTop)
      this.offsetTop.push(this.$refs.comment.$el.offsetTop)
      this.offsetTop.push(this.$refs.recommend.$el.offsetTop)
      // console.log(this.offsetTop);
    }


  },


}
</script>

<style scoped>
/**{*/
/*  !*justify-content: space-evenly;*!*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/
html {
  scroll-behavior: smooth;
}

.back-top1 {
  border: none;
  bottom: 15px;
}


</style>
