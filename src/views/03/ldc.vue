<template>
  <div class="main">
    <el-form :model="message" inline>
      <el-form-item label="今天是" label-width="100px">
        {{ this.message.time }}
      </el-form-item>
      <el-form-item label="今日刷卡" label-width="100px">
        <el-input-number v-model="this.message.orderCount" :min="0" @change="a"/>
      </el-form-item>
      <el-form-item label="今日刷卡额" label-width="100px" :inline="true">
        <el-input-number v-model="this.message.orderSum" :min="0" style="width: 85%"/>
          <span>&nbsp&nbsp万</span>
      </el-form-item>
      <el-form-item label="本周刷卡" label-width="100px" :inline="true">
        <el-input-number v-model="this.message.weekOrderCount" :min="0"/>
      </el-form-item>
      <el-form-item label="本周刷卡额" label-width="100px" :inline="true">
        <el-input-number v-model="this.message.weekOrderSum" :min="0" style="width: 85%"/>
        <span>&nbsp&nbsp万</span>
      </el-form-item>
      <el-form-item label="共计刷卡" label-width="100px" :inline="true">
        {{this.message.totalOrder}}张
      </el-form-item>
      <el-form-item label="共计刷卡额" label-width="100px" :inline="true">
<!--        <el-input-number v-model="this.message.weekOrderSum" :min="0" style="width: 85%"/>-->
        {{this.message.totalPrice}}万
      </el-form-item>

    </el-form>

    <el-button @click="copy" type="primary">
      下班！
    </el-button>
    <el-form-item label="渠道到访">
      <el-input-number v-model="this.message.qd" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="自然到访">
      <el-input-number v-model="this.message.zr" :min="0"></el-input-number>
    </el-form-item>
    <el-button type="success" @click="copy1">真的下班了</el-button>

  </div>
</template>

<script>
export default {
  name: "ldc",
  data() {
    return {
      message: {
        time: '',
        orderCount: 0,
        orderSum: 0,
        weekOrderCount:this.$store.state.message.weekOrderCount,
        weekOrderSum:this.$store.state.message.weekOrderSum,
        totalOrder:this.$store.state.message.totalOrder,
        totalPrice:this.$store.state.message.totalPrice,
        doneOrder:0,
        donePrice:0,
        refundCount:0,
        refundPrice:0,
        qd:0,
        zr:0
      }
    }
  },
  created() {
    this.getDate()
    // this.$cookies.set("token","12346","1d")
  },
  methods: {
    getDate() {
      const date = new Date();
      const seperator1 = "-";
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      // return year + " 年 " + month + " 月 " + strDate + " 日 ";
      this.message.time = year + "." + month + "." + strDate
    },
    a(value){
      this.message.orderSum = this.message.orderCount *2
      this.message.weekOrderCount += this.message.orderCount
      this.message.weekOrderSum += this.message.orderSum
    },
    copy() {
      this.$store.commit('daily',this.message)
      this.message.weekOrderCount=this.$store.state.message.weekOrderCount
      this.message.weekOrderSum=this.$store.state.message.weekOrderSum
      this.message.totalOrder=this.$store.state.message.totalOrder
      this.message.totalPrice=this.$store.state.message.totalPrice
      let copyMsg = '填写日期：' + this.message.time + '\n'
        + '立项id：EXT24608' + '\n'
        + '项目名称：玉林绿地城' + '\n'
        + '今日刷卡张数：' + this.message.orderCount + '张' + '\n'
        + '今日刷卡金额：' + this.message.orderSum + '万' + '\n'
        + '本周刷卡张数：' + this.message.weekOrderCount + '张' + '\n'
        + '本周刷卡金额：' + this.message.weekOrderSum + '万' + '\n'
        + '共计刷卡张数：' + this.$store.state.message.totalOrder + '张' + '\n'
        + '共计刷卡金额：' + this.$store.state.message.totalPrice + '万' + '\n'
        + '成销张数：0张' + '\n'
        + '成销金额：0万元' + '\n'
        + '退款张数：0张' + '\n'
        + '退款金额：0万元' + '\n'
        + '提交人：林珊'
      this.$copyText(copyMsg).then(function (e){
        alert('复制成功')
      })


    },
    copy1(){
      let copyMsg = '填写日期：' + this.message.time + '\n'
        + '立项id：EXT24608' + '\n'
        + '项目名称：玉林绿地城' + '\n'
        + '今日刷卡张数：' + this.message.orderCount + '张' + '\n'
        + '今日刷卡金额：' + this.message.orderSum + '万' + '\n'
        + '成销张数：0张' + '\n'
        + '成销金额：0万元' + '\n'
        + '退款张数：0张' + '\n'
        + '退款金额：0万元' + '\n'
        + '甲方购房政策是否有异动：无' + '\n'
        + '到访量：渠道' + this.message.qd + '组，' + '自然' + this.message.zr + '组' + '\n'
        + '提交人：林珊'
      this.$copyText(copyMsg).then(function (e){
        alert('复制成功')
      })
    }
  }
}
</script>

<style scoped>

.main{
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: solid 1px #eee;
  border-radius: 5px;
}

.el-button{
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 10px;
}

</style>
