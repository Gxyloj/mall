<template>
  <div v-if="Object.keys(salesInfo).length !== 0" class="base-info">
    <p class="title">{{itemInfo.title}}</p>
    <div class="mainInfo">
      <span class="nowPrice">￥{{itemInfo.lowNowPrice}}</span>
      <span class="oldPrice" v-show="!isPromotion">￥{{itemInfo.lowPrice}}</span>
      <span class="promotion"
            :style="{background:itemInfo.discountBgColor}"
            v-show="!isPromotion">
        {{itemInfo.discountDesc}}
      </span>
    </div>
    <div class="secondaryInfo">
      <span v-for="item in salesInfo.slice(0,salesInfo.length-1)">{{item}}</span>
      <span>{{shopInfo.services[shopInfo.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in shopInfo.services.length - 1" class="item-services">
        <img :src="shopInfo.services[1].icon" alt="">
        <span>{{shopInfo.services[index - 1].name}}</span>
      </span>
    </div>
    <div class="shop-info">
      <div class="shop-title">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    itemInfo:{
      type:Object
    },
    salesInfo:{
      type:Array
    },
    shopInfo:{
      type:Object,
    }
  },
  data(){
    return{

    }
  },
  computed:{
    isPromotion(){
      return this.itemInfo.lowNowPrice === this.itemInfo.lowPrice
    }
  },
  created() {
      console.log(this.shopInfo);
      console.log(this.salesInfo);
    // console.log(Object.keys(this.shopInfo).length);
    // console.log(this.shopInfo.services[this.shopInfo.services.length - 1].name);
    // console.log(this.salesInfo);
    // console.log(this.isPromotion);
    // console.log(this.shopInfo.services[shopInfo.services.length - 1].name);
    // console.log(this.shopInfo.services.length);
    // console.log(this.shopInfo.services);
  }
}
</script>

<style scoped>
*{
  padding:0 3px;
}

.title{
  /*font-weight: bold;*/
  font-size: 1.2rem;
}
.nowPrice{
  color: var(--font-color);
  font-size: 1.6rem;
}
.oldPrice{
  font-size: 0.8rem;
  text-decoration: line-through;
}
.promotion{
  position: relative;
  bottom: 12px;
  color: #ffffff;
  /*background: var(--font-color);*/
  font-size: 0.5rem;
  padding: 5px;
  border-radius: 8px;
}
.secondaryInfo{
  display: flex;
  border-bottom: 1px solid rgba(100,100,100,.1);
  padding-bottom: 5px;
}
.secondaryInfo span{
  color: #666666;
  font-size: 0.4rem;
  margin-top: 5px;
  text-align: center;
  flex: 1;
}
span >>> img{
  width: 0.8rem;
}
.services{
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
}
.item-services{
  /*flex: 1;*/
  font-size: 0.4rem;
  /*text-align: center;*/
}
.base-info{
  padding-bottom: .8rem;
  box-shadow:0 8px #f2f5f8;
}
.shop-title{

}
</style>
