<template>
  <div id="order">
    <!--    {{ dataList }}-->
    <div class="list">
      <div v-for="(item,index) in dataList">
        <van-card
          :num=item.count
          :price=item.price
          :title=item.title
          :thumb=item.image
          @click="switchChecked(index)"
        />
      </div>
      <p v-if="dataList[0]">订单总价{{ dataList[1].totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import {getOrderList} from "@/network/login";
import utils from "@/common/utils/utils.ts";
import {getDetail} from "@/network/detail";

export default {
  name: "Order",
  data() {
    return {
      dataList: []
    }
  },
  activated() {
    this.dataList = []
    this.getOrderList()
  },
  created() {
    // this.getOrderList()
  },
  methods: {
    getOrderList() {
      getOrderList(utils.getCookie('username')).then(res => {
        // this.dataList = res
        console.log(res);
        res.forEach(item => {
          getDetail(item[2]).then(detail => {
            this.dataList.push({
              checked: true,
              count: item[3],
              desc: detail.result.itemInfo.desc,
              iid: item[3],
              image: detail.result.itemInfo.topImages[0],
              price: detail.result.itemInfo.lowNowPrice,
              title: detail.result.itemInfo.title,
              totalPrice: item[6],
              // create_time:item[4]
            })
          })
        })
      })
    },

  }
}
</script>

<style scoped>
#order {
  background-color: #eee;
  height: 100vh;
}
.list{
  background-color: #fafafa;
  padding: 0 0 2px 0;
}
.list p{
  margin-left: 12px;
}
</style>
