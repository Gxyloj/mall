<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-info">
      <div class="start"></div>
      <div class="desc">
        {{ detailInfo.desc }}
      </div>
      <div class="end"></div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
        <img :src="item" alt="" v-for="item in detailInfo.detailImage[0].list">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImageInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  created() {
    console.log(this.detailInfo);
  }
}
</script>

<style scoped>
.detail-info {
  padding: 10px;
}

.detail-info .start {
  float: left;
}

.detail-info .end {
  float: right;
}

.desc {
  padding: 15px;
  color: #666666;
  font-size: .8rem;
}

.detail-info .start::before, .detail-info .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.detail-info .start, .detail-info .end {
  width: 90px;
  height: 1px;
  background-color: #333333;
  position: relative;
}

.detail-info .end::after {
  right: 0;
}

.info-key{
  padding: 10px;
  color: #333333;
  font-size: .8rem;
}

.info-list img{
  width: 100vw;
}
</style>
