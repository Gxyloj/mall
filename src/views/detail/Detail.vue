<template>
  <div>
    <van-sticky>
      <detail-nav></detail-nav>
    </van-sticky>
    <detail-swipe :swipeImg="swipeImg"></detail-swipe>
    <detail-base-info :itemInfo="itemInfo"
                      :salesInfo="salesInfo"
                      :shopInfo="shopInfo"
                      :detailInfo="detailInfo"></detail-base-info>
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <detail-image-info :detailInfo="detailInfo"></detail-image-info>
    <detail-parameter :detailParameter="detailParameter"></detail-parameter>
    <detail-comment :detailComment="detailComment"></detail-comment>
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
import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  components: {DetailNav, DetailSwipe, DetailBaseInfo, DetailShopInfo, DetailImageInfo, DetailParameter, DetailComment,BackTop},
  data() {
    return {
      iid: null,
      swipeImg: [],
      itemInfo: {},
      salesInfo: [],
      shopInfo: {},
      detailInfo: {},
      detailParameter: {},
      detailComment:{},
      flag: false
    }
  },
  created() {
    //保存传入的商品id
    this.iid = this.$route.params.iid

    //根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
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
      console.log(this.detailComment);
    })
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop
      this.flag = scrollTop > window.screen.availHeight;
    })
  },
  methods: {
    scrollToTop(position) {
      // 获取当前元素滚动的距离
      let scrollTopDistance = document.documentElement.scrollTop || document.body.scrollTop;

      function smoothScroll() {
        // 如果你要滚到顶部，那么position传过来的就是0，下面这个distance肯定就是负值。
        let distance = position - scrollTopDistance;
        // 每次滚动的距离要不一样，制造一个缓冲效果
        scrollTopDistance = scrollTopDistance + distance / 20;
        // 判断条件
        if (Math.abs(distance) < 1) {
          window.scrollTo(0, position);
        } else {
          window.scrollTo(0, scrollTopDistance);
          requestAnimationFrame(smoothScroll);
        }
      }

      smoothScroll();
    },


  }


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
