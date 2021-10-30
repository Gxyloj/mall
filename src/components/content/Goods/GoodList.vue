<template>
  <div class="goods">
    <van-grid :column-num="2" :border="false" :clickable="true">
      <van-grid-item v-for="item in goods">
          <good-list-item :good-item="item">
          </good-list-item>
      </van-grid-item>

    </van-grid>

  </div>
</template>

<script>
import GoodListItem from "@/components/content/Goods/GoodListItem";

export default {
  name: "GoodList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{GoodListItem},
  methods:{

  },
  // mounted() {
  //   console.log(this.goods);
  // }
}
</script>

<style scoped>
.goods{

}

</style>
