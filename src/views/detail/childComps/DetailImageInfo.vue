<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-info">
      <div class="start"></div>
      <div class="desc">
        {{ detailInfo.desc }}
      </div>
      <div class="end"></div>
      <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
      <div class="info-list">
        <img :src="item" alt="" v-for="item in detailInfo.detailImage[0].list" @load="detailImgLoad">
      </div>
    </div>
  </div>
</template>

<script>
import {debounce} from "@/common/utils";

export default {
  name: "DetailImageInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  created() {
    // console.log(this.detailInfo);
  },
  methods: {
    detailImgLoad() {
      this.$emit('detailImgLoad')
    }
  }
}
</script>

<style scoped>
.detail-info {
  border-bottom: 8px solid #f2f5f8;

}

.detail-info .start {
  margin: 10px;
  float: left;
}

.detail-info .end {
  margin: 10px;
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

.info-key {
  padding: 10px;
  color: #333333;
  font-size: .8rem;
}

.info-list img {
  width: 100vw;
}
</style>
