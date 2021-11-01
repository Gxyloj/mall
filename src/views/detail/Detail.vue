<template>
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



</template>

<script>
import DetailNav from "@/views/detail/childComps/DetailNav";
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailImageInfo from "@/views/detail/childComps/DetailImageInfo";
import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  components:{DetailNav, DetailSwipe, DetailBaseInfo, DetailShopInfo, DetailImageInfo},
  data(){
    return {
      iid:null,
      swipeImg:[],
      itemInfo:{},
      salesInfo:[],
      shopInfo:{},
      detailInfo:{},
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
    })
  }


}
</script>

<style scoped>
  /**{*/
  /*  !*justify-content: space-evenly;*!*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*}*/




</style>
