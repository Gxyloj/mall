<template>
  <div id="bottom-bar">
    <van-row>
      <van-col span="12">
        <van-row>
          <van-col span="8">
            <icon-svg icon-class="kefu"/>
            <span>客服</span>
          </van-col>
          <van-col span="8">
            <icon-svg icon-class="dianpu"/>
            <span>店铺</span>
          </van-col>
          <van-col span="8">
            <icon-svg icon-class="shoucang"/>
            <span>收藏</span>
          </van-col>
        </van-row>
      </van-col>
      <van-col span="12" style="padding: 0">
        <van-row>
          <van-col span="12">
            <button style="background-color: #ffe817">加入购物车</button>
          </van-col>
          <van-col span="12">
            <button style="background-color: #ff6699;color: #eeeeee">购买</button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import iconSvg from "@/components/common/iconSvg";

export default {
  name: "DetailBottomBar",
  components: {iconSvg,}
}
</script>

<style scoped>
#bottom-bar {
  height: 50px;
  width: 100vw;
  position: fixed;
  /*fixed和bottom吸附底部*/
  bottom: 0;
  /*line-height: 58px;*/
  background-color: #fff;
  text-align: center;
}


.svg-icon {
  display: block;
  margin:auto;
}
.van-col{
  height: 50px;
  padding: 2px;
}
.van-col--12{
  padding: 0;
}
button{
  border: none;
  height: 100%;
  width: 100%;
}
span{
  color: #666;
}
</style>
