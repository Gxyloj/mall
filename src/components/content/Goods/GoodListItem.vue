<template>
  <div class="good-item"  @click="itemClick">
    <img :src="showImage" alt="">
    <div class="info-title">
      <p class="name">{{ goodItem.title }}</p>
      <span class="price">{{ '￥' }}{{ goodItem.price }}</span>
      <van-icon name="star-o" />
      <span class="collect">{{ goodItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImage(){
      return this.goodItem.image || this.goodItem.show.img
    }
  },
  methods:{
    itemClick(){
      // console.log('点击');
      this.$router.push('/detail/'+ this.goodItem.iid)
    }
  }
}
</script>

<style scoped>

img {
  width: 100%;
  border-radius: 5px;
}

.good-item {
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 45vw;
}

.price{
  color:var(--font-color);
  margin-right: 5px;
}

.show{
  display: none;
}

p{
  margin-top: 1px;
  margin-bottom: 5px;
}
</style>
