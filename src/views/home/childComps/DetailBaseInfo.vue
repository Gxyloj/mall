<template>
  <div>
    <p class="title">{{itemInfo.title}}</p>
    <div class="mainInfo">
      <span class="nowPrice">￥{{itemInfo.lowNowPrice}}</span>
      <span class="oldPrice">￥{{itemInfo.lowPrice}}</span>
      <span class="promotion">活动价</span>
    </div>
    <div class="secondaryInfo">
<!--      <span v-for="item in salesInfo">{{item}}</span>-->
    </div>
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
  created() {
    // console.log(this.salesInfo);

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
</style>
