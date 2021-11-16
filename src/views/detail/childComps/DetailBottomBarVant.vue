<template>
  <div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-icon icon="star-o" text="收藏" />
      <van-action-bar-button color="#ffe817" type="warning" text="加入购物车" />
      <van-action-bar-button color="#ff6699" type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBarVant"
}
</script>

<style scoped>
.van-button__text{
  color: #000;
}
</style>
