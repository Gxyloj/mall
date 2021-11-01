<template>
  <div v-if="Object.keys(salesInfo).length !== 0" class="base-info">
    <p class="title">{{ itemInfo.title }}</p>
    <div class="mainInfo">
      <span class="nowPrice">￥{{ itemInfo.lowNowPrice }}</span>
      <span class="oldPrice" v-show="!isPromotion">￥{{ itemInfo.lowPrice }}</span>
      <span class="promotion"
            :style="{background:itemInfo.discountBgColor}"
            v-show="!isPromotion">
        {{ itemInfo.discountDesc }}
      </span>
    </div>
    <div class="secondaryInfo">
      <span v-for="item in salesInfo.slice(0,salesInfo.length-1)">{{ item }}</span>
      <span>{{ shopInfo.services[shopInfo.services.length - 1].name }}</span>
    </div>
    <div class="services">
      <span v-for="index in shopInfo.services.length - 1" class="item-services">
        <img :src="shopInfo.services[1].icon" alt="">
        <span>{{ shopInfo.services[index - 1].name }}</span>
      </span>
    </div>

  </div>
  <div class="shop-info" v-if="Object.keys(salesInfo).length !== 0">
    <div class="shop-title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-score">
      <van-row>
        <van-col span="8" style="text-align: center">
          <p>{{sellCountFilter}}</p>
          <p>总销量</p>
        </van-col>
        <van-col span="8" style="text-align: center">
          <p>{{ shopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </van-col>
        <van-col span="8">
          <div class="table1">
            <table>
              <tr v-for="item in shopInfo.score">
                <td>{{ item.name }}</td>
                <td class="score" :class="{better:item.isBetter}">{{ item.score }}</td>
                <td class="score1" :class="{'better-more':item.isBetter}">{{ item.isBetter ? '高' : '低' }}</td>
              </tr>
            </table>
          </div>

        </van-col>
      </van-row>

    </div>
    <button>进入店铺</button>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    itemInfo: {
      type: Object
    },
    salesInfo: {
      type: Array
    },
    shopInfo: {
      type: Object,
    }
  },
  data() {
    return {}
  },
  filters: {//已弃用
    sellCountFilter: function (value) {
      if (value < 1000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  },
  computed: {
    isPromotion() {
      return this.itemInfo.lowNowPrice === this.itemInfo.lowPrice
    },
    sellCountFilter(){
      let sells = this.shopInfo.cSells;
      if(sells < 10000) return sells;
      return (sells / 10000).toFixed(2) + '万'
    }
  },
  created() {
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
* {
  padding: 0 3px;
}

.title {
  /*font-weight: bold;*/
  font-size: 1.2rem;
}

.nowPrice {
  color: var(--font-color);
  font-size: 1.6rem;
}

.oldPrice {
  font-size: 0.8rem;
  text-decoration: line-through;
}

.promotion {
  position: relative;
  bottom: 12px;
  color: #ffffff;
  /*background: var(--font-color);*/
  font-size: 0.5rem;
  padding: 5px;
  border-radius: 8px;
}

.secondaryInfo {
  display: flex;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding-bottom: 5px;
}

.secondaryInfo span {
  color: #666666;
  font-size: 0.4rem;
  margin-top: 5px;
  text-align: center;
  flex: 1;
}

span >>> img {
  width: 0.8rem;
}

.services {
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
  justify-content: space-between;
}

.item-services {
  /*flex: 1;*/
  font-size: 0.4rem;
  /*text-align: center;*/
}

.base-info {
  margin-bottom: 1.6rem;
  box-shadow: 0 8px #f2f5f8;
}

.shop-info {
  border-bottom: 8px solid #f2f5f8;
  padding-bottom: 10px;
  color: #333333;
}

.shop-title img {
  padding: 0;
  width: 4rem;
  border: 1px solid;
  border-radius: 4rem;
}

.shop-title span {
  position: relative;
  font-size: .8rem;
  color: #666;
  text-align: center;
  left: .4rem;
  bottom: 1.7rem;
}

table {
  font-size: .8rem;
  text-align: center;
  padding: 10px 0;
  border-collapse: separate;
  border-spacing: 0px 10px;
}


.van-row p {
  position: relative;;
  margin: 5px 0;
  top: 1.5rem;
}


button {
  color: #666666;
  background-color: #f2f5f8;
  padding: 10px 30px;
  border-radius: 10px;

  border: none;
  display: block;
  margin: auto;
}

.score {
  color: #5ea732;
}

.score1 {
  color: #fff;
  background-color: #5ea732;
  padding: 1px;
}

.better {
  color: #f13e3a;
}

.better-more {
  color: #fff;
  background-color: #f13e3a;

}
</style>
