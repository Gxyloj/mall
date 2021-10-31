<template>
  <van-sticky>
    <detail-nav></detail-nav>
  </van-sticky>
  <detail-swipe :swipeImg="swipeImg"></detail-swipe>
  <detail-base-info :itemInfo="itemInfo"
                    :salesInfo="salesInfo"
                    :shopInfo="shopInfo"></detail-base-info>



</template>

<script>
import DetailNav from "@/views/detail/childComps/DetailNav";
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  components:{DetailNav, DetailSwipe, DetailBaseInfo},
  data(){
    return {
      iid:null,
      swipeImg:[],
      itemInfo:{},
      salesInfo:[],
      shopInfo:{},
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
      // console.log(this.shopInfo);
      // console.log(this.shopInfo.services[this.shopInfo.services.length - 1].name);

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
