<template>
  <div class="main">
    <el-form :model="message" inline>
      <el-form-item label="今天是" label-width="100px">
        {{ this.message.time }}
      </el-form-item>
      <el-form-item>
        <span style="color: #606266;font-size:13px;margin:0 0 0 50px;">也是爱你的一天</span>
      </el-form-item>
      <div style="border: 1px solid #67c23a;padding-top: 15px;margin-bottom: 15px;border-radius: 2px">
      <el-form-item label="今日刷卡" label-width="100px">
        <el-input-number v-model="this.message.orderCount" :min="0" @change="a"/>
      </el-form-item>
      <el-form-item label="今日刷卡额" label-width="100px" :inline="true">
        <el-input-number v-model="this.message.orderSum" :min="0" style="width: 85%"/>
        <span>&nbsp&nbsp万</span>
      </el-form-item>
      </div>
      <el-form-item label="本周刷卡" label-width="100px" :inline="true">
        <el-input-number v-model="this.message.weekOrderCount" :min="0"/>
      </el-form-item>
      <el-form-item label="本周刷卡额" label-width="100px" :inline="true">
        <el-input-number v-model="this.message.weekOrderSum" :min="0" style="width: 85%"/>
        <span>&nbsp&nbsp万</span>
      </el-form-item>
      <p style="color: #606266;font-size:13px;margin-left: 50px;">昨天的本周数据{{this.msgBAK.weekOrderCount}}张{{this.msgBAK.weekOrderSum}}万</p>
      <el-form-item label="共计刷卡" label-width="100px" :inline="true">
        {{ this.message.totalOrder }}张
      </el-form-item>
      <el-form-item label="共计刷卡额" label-width="100px" :inline="true">
        <!--        <el-input-number v-model="this.message.weekOrderSum" :min="0" style="width: 85%"/>-->
        {{ this.message.totalPrice }}万
      </el-form-item>


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
    </el-form>


  </div>
</template>

<script>
import utils from "@/common/utils/utils.ts";
import test from "@/components/common/TabControl/test";

export default {
  name: "ldc",
  data() {
    return {
      message: {
        time: '',
        time1:'',
        orderCount: 0,
        orderSum: 0,
        weekOrderCount: 5,
        weekOrderSum: 10,
        totalOrder: 180,
        totalPrice: 377,
        doneOrder: 0,
        donePrice: 0,
        refundCount: 0,
        refundPrice: 0,
        qd: 0,
        zr: 0
      },
      msgBAK:{},
      dayWeek:null
    }
  },
  created() {
    // this.$cookies.set("token","12346","1d")
    // utils.setCookie('test',111)
    // console.log(this.test);
    // this.test = utils.getCookie('test')
    // console.log(this.test);
    if (!utils.getCookie('message')) {
      utils.setCookie('message', JSON.stringify(this.message))
      this.msgBAK = this.message
    } else {
      // console.log(utils.getCookie('message'));
      this.message = JSON.parse(utils.getCookie('message'))
      this.msgBAK = JSON.parse(utils.getCookie('message'))
    }
    this.getDate()



  },
  methods: {
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      this.dayWeek = date.getDay()
      // date.getDay()
      if (this.dayWeek === 1) {
        this.$nextTick(() => {
          alert('今天是周一捏，已经帮你把本周数据清零啦')
          this.message.weekOrderSum = 0
          this.message.weekOrderCount = 0
          this.msgBAK.weekOrderCount = 0
          this.msgBAK.weekOrderSum = 0
        })

      }
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      // return year + " 年 " + month + " 月 " + strDate + " 日 ";
      this.message.time = year + "." + month + "." + strDate
      this.message.time1 = year + "/" + month + "/" + strDate
    },
    a(value) {
      this.message.orderSum = this.message.orderCount * 2
      this.message.weekOrderCount  = this.msgBAK.weekOrderCount + this.message.orderCount
      this.message.weekOrderSum = this.msgBAK.weekOrderSum + this.message.orderSum
    },

    copy() {
      // this.$store.commit('daily',this.message)
      // this.message.weekOrderCount=this.$store.state.message.weekOrderCount
      // this.message.weekOrderSum=this.$store.state.message.weekOrderSum
      // this.message.totalOrder=this.$store.state.message.totalOrder
      // this.message.totalPrice=this.$store.state.message.totalPrice
      // if (this.dayWeek !== 1){
      //   this.message.weekOrderCount += this.message.orderCount
      //   this.message.weekOrderSum += this.message.orderSum
      // }
      this.message.totalOrder += this.message.orderCount
      this.message.totalPrice += this.message.orderSum
      let copyMsg = '填写日期：' + this.message.time + '\n'
        + '立项id：EXT24608' + '\n'
        + '项目名称：玉林绿地城' + '\n'
        + '今日刷卡张数：' + this.message.orderCount + '张' + '\n'
        + '今日刷卡金额：' + this.message.orderSum + '万' + '\n'
        + '本周刷卡张数：' + this.message.weekOrderCount + '张' + '\n'
        + '本周刷卡金额：' + this.message.weekOrderSum + '万' + '\n'
        + '共计刷卡张数：' + this.message.totalOrder + '张' + '\n'
        + '共计刷卡金额：' + this.message.totalPrice + '万' + '\n'
        + '成销张数：0张' + '\n'
        + '成销金额：0万元' + '\n'
        + '退款张数：0张' + '\n'
        + '退款金额：0万元' + '\n'
        + '提交人：林珊'
      this.$copyText(copyMsg).then(function (e) {
        alert('复制好咯，去开发商群粘贴吧')
      })


      utils.setCookie('message', JSON.stringify(this.message))


    },
    copy1() {
      let copyMsg = '填写日期：' + this.message.time1 + '\n'
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
      this.$copyText(copyMsg).then(function (e) {
        alert('发到案场群可以下班啦')
      })
      this.message.orderCount = 0
      this.message.orderSum = 0
      this.message.qd = 0
      this.message.zr = 0
      utils.setCookie('message', JSON.stringify(this.message))
    }
  }
}
</script>

<style scoped>

.main {
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 1px #eee;
  border-radius: 5px;
}

.el-button {
  margin-left: 50%;
  transform: translate(-50%);
  margin-bottom: 10px;
}

</style>
