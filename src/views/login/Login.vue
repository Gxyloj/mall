<template>
  <div class="login">
    <div class="common-layout">
      <el-container>
        <el-header>登录</el-header>
        <el-main>

          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            :prefix-icon="User"
          />
          <el-input
            v-model="loginForm.password"
            show-password
            placeholder="密码"
            :prefix-icon="Lock"
          />
        </el-main>
      </el-container>
      <el-button round color="#bf8dcc" @click="login">登录</el-button>
      <el-button round color="#bf8dcc">注册</el-button>

    </div>
  </div>
</template>

<script>
import {User, Lock} from "@element-plus/icons";
import {login} from "@/network/login";
import crypto from 'crypto'
import utils from "@/common/utils/utils.ts";
import {ElMessage, ElMessageBox} from "element-plus";

export default {
  name: "Login",
  data() {
    return {
      User, Lock,
      loginForm: {
        username: '',
        password:''
      }

    }
  },
  created() {
  },
  methods:{
    login(){
      login(this.loginForm).then(res => {
        console.log(res);
        if (res.code !== 200) return ElMessage.error('res.message')
        utils.setCookie('username',JSON.stringify(res.info[0]))
        // ElMessageBox.confirm(
        //   '登录成功！点击确定返回个人页面',
        //   '提示',
        //   {
        //     confirmButtonText:'确定',
        //     type:'success'
        //   }
        // ).then(() => {
        //   console.log('回去')
        // })
        ElMessage.success(res.message)
      })
    }
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  background: linear-gradient(200deg, #8198ff,#ff8198);
  padding: 10%
}

.common-layout {
  color:#fff;
  text-align: center;
  font-family: 幼圆;
  font-size: 2rem;
}

.el-header {

}

.el-main {
  border-radius: 8px;
  border: 1px solid #dadada;

}
.el-main1 {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  transform: translate(-50%, -50%);

}


.el-input {
  margin: 5px 0px;
}

.el-button {
  width: 40%;
  margin-top: 15px;
  color: #fff
}

/deep/ .el-input__inner {
  border: 1px solid #dadada;
  background-color: transparent;
}
/deep/ .el-textarea__inner{
  background-color: transparent;

}

</style>
