<template>
  <div>
    <p class="title">{{itemInfo.title}}</p>
    <div class="mainInfo">
      <span class="nowPrice">￥{{itemInfo.lowNowPrice}}</span>
      <span class="oldPrice" v-show="!isPromotion">￥{{itemInfo.lowPrice}}</span>
      <span class="promotion" >活动价</span>
    </div>
    <div class="secondaryInfo">
      <span v-for="item in salesInfo" class="aaa">{{item}}</span>
    </div>
    <hr style="border:1px solid #D5D5D5"/>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    itemInfo:{
      type:Array
    },
    salesInfo:{
      type:Array
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
    // console.log(this.salesInfo);
    console.log(this.isPromotion);

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
  background: var(--font-color);
  font-size: 0.5rem;
  padding: 5px;
  border-radius: 8px;
}
.secondaryInfo{
  display: flex;
}
.aaa{
  color: #666666;
  font-size: 0.4rem;
  margin-top: 5px;
  text-align: center;
  flex: 1;
}
</style>
