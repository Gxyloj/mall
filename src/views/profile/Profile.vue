<template>
  <div class="profile">
    <!--  {{info}}-->
    <div class="header">
      <el-avatar :size="120" :src="circleUrl"/>
      <p>{{ info.username }}</p>
    </div>
    <div class="my">
      <div class="icon">
        <el-icon size="50px" color="#ff8198">
          <present/>
        </el-icon>
        <span>订单</span>
      </div>
      <div class="icon" @click="this.$router.push('/shoppingcart')">
        <el-icon size="50px" color="#ff8198">
          <shopping-cart-full/>
        </el-icon>
        <span>购物车</span>

      </div>
      <div class="icon">
        <el-icon size="50px" color="#ff8198">
          <location/>
        </el-icon>
        <span>收货地址</span>
      </div>
      <div class="icon" @click="logout">
        <el-icon size="50px" color="#ff8198">
          <upload/>
        </el-icon>
        <span>注销</span>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/common/utils/utils.ts";
import {ElMessage} from "element-plus";

export default {
  name: "Profile",
  created() {
    this.info.username = utils.getCookie('username')
  },
  data() {
    return {

      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      info: {
        username: ""
      }
    }
  },
  methods: {
    logout(){
      utils.clearCookie('username')
      ElMessage.success('注销成功')
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
.profile {
  background-color: #eee;
}

.header {
  height: 25vh;
  background-color: #fff;
  border-bottom: 8px solid #fdfdfd;

}

.el-avatar {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
}

.header p {
  font-size: 2rem;
  font-family: 幼圆;
  text-align: center;
  /*margin-top: 23%;*/
  color: #ff8198;
}

span {
  display: block;
  color: #ff8198;
}

.my {
  height: 12vh;
  background-color: #fff;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
}

.icon {
  text-align: center;
  flex: 1;
}

/deep/ .el-icon {
  margin-top: 15px;
}
</style>
