<template>
    <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
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
  name: "DetailShopInfo",
  props:{
    shopInfo: {
      type: Object,
    },
  },
  computed:{
    sellCountFilter(){
      let sells = this.shopInfo.cSells;
      if(sells < 10000) return sells;
      return (sells / 10000).toFixed(2) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info {
  border-bottom: 8px solid #f2f5f8;
  padding-bottom: 10px;
  color: #333333;
}

.shop-title img {
  margin: 0 15px;
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
