<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    // console.log(this.recommends);
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 16px;
  padding: 10px 0 16px;
  border-bottom: 10px solid #eee;
}

.recommend>>>img{
  width: 20vw;
  margin-bottom: 5px;
}

.recommend-item{
  flex: 1;
}

a {
  color: #000;
  text-decoration: none;

  margin: 5px;
}
</style>
