<template>
  <div class="detail-comment" v-if="Object.keys(detailComment).length!==0">
    <div class="head">
      <div class="head-left">
        用户评价
      </div>
      <div class="head-right">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="user">
      <img :src="detailComment.user.avatar" alt="">
      <p>{{ detailComment.user.uname }}</p>
    </div>
    <div class="content">
      <p>{{ detailComment.content }}</p>
      <span>{{ showDate }}</span>
      <span>{{ detailComment.style }}</span>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "DetailComment",
  props: {
    detailComment: {
      type: Object
    }
  },
  computed: {
    showDate() {
      let date = new Date(this.detailComment.created * 1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
}

.detail-comment {
  padding: 10px;
  color: #333333;
  border-bottom: 5px solid #f2f5f8;
}

.head {
  height: 2.5rem;
  border-bottom: 1px solid rgba(51, 51, 51, .1);
}

.arrow-right {
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  width: 9px;
  height: 9px;
  background-color: transparent;
  transform: rotate(135deg);
  display: inline-block;
  margin-left: .1rem;
}

.head-left {
  margin: 10px;
  float: left;
}

.head-right {
  margin: 10px;
  float: right;
}

.user {
  padding: 10px;
}

.user img {
  width: 12vw;
  border-radius: 50%;
}

.user p {
  margin-left: 5px;
  display: inline;
  position: relative;
  bottom: 1rem;
}

.content {
  padding: 0 15px;
  font-size: .9rem;
  color: #777777;
}
.content p{
  margin-bottom: 3px;
}

.content span {
  margin: 5px 5px 5px 0;

}
</style>
