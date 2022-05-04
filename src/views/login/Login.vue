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
          <el-input
            v-if="isRegister"
            v-model="loginForm.repeatPassword"
            show-password
            placeholder="确认密码"
            :prefix-icon="Lock"
          />
        </el-main>
      </el-container>
      <el-button v-if="!isRegister" round color="#bf8dcc" @click="login">登录</el-button>
      <el-button v-if="!isRegister" round color="#bf8dcc" @click="this.isRegister = true">注册</el-button>
      <el-button v-if="isRegister" round color="#bf8dcc" @click="toRegister">注册</el-button>
      <el-button v-if="isRegister" round color="#bf8dcc" @click="this.isRegister = false">返回</el-button>
    </div>
  </div>
</template>

<script>
import {User, Lock} from "@element-plus/icons";
import {login, pushCart,register} from "@/network/login";
import crypto from 'crypto'
import utils from "@/common/utils/utils.ts";
import {ElMessage, ElMessageBox} from "element-plus";
import 'element-plus/theme-chalk/el-message.css'

export default {
  name: "Login",
  data() {
    return {
      User, Lock,
      isRegister:false,
      loginForm: {
        username: 'admin',
        password: 'admin',
        repeatPassword:''
      },
      pushCart:[]

    }
  },
  created() {

  },
  methods: {
    login() {
      login(this.loginForm).then(res => {
        if (res.code !== 200) return ElMessage.error(res.message)
        utils.setCookie('username', res.username)
        ElMessage.success(res.message)
        this.$router.push('/profile')
        //  购物车
        //往里加
        if (this.$store.state.cartList.length !== 0){
          console.log('vuex里有')
          this.pushCart = []
          if (this.$store.state.cartList){
            //遍历购物车里的东西 整理到新数组
            // console.log(this.pushCart)
            this.$store.state.cartList.forEach(item => {
              this.pushCart.push({iid:item.iid,count:item.count})
            })
            // console.log(this.pushCart)
            // console.log(Array.isArray(this.pushCart))
            let data = {username:res.username,cart:this.pushCart}
            // console.log(data)
            pushCart(data).then(res => {
              console.log(res)
            })
          }
        }else{
          //往外取

        }

      })
    },
    toRegister(){
      if (this.loginForm.password === this.loginForm.repeatPassword){
        register(this.loginForm).then(res => {
          if(res.code !== 200 ) return ElMessage.error(res.message)
          ElMessage.success(res.message)
          this.isRegister = false
        })
      }else{
        ElMessage.error('两次密码不一致')
      }
    }
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  background: linear-gradient(200deg, #8198ff, #ff8198);
  padding: 10%
}

.common-layout {
  color: #fff;
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

/deep/ .el-textarea__inner {
  background-color: transparent;

}

</style>
