<template>
  <nav-bar style="background-color: #fff" ref="detailNav">
    <template v-slot:left>
      <div>
        <icon-svg icon-class="fanhui"
                  class="icon"
                  @click="backClick"></icon-svg>
      </div>
    </template>
    <template v-slot:center>
      <div class="detail-nav">
        <div class="title-item"
             v-for="(item,index) in titles"
             :class="{active:index === this.currentIndex}"
             @click="itemClick(index)">
          {{ item }}
        </div>
      </div>

    </template>
  </nav-bar>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import iconSvg from "@/components/common/iconSvg";
import {debounce, scrollToTop} from "@/common/utils";

export default {
  name: "DetailNav",
  components: {NavBar, iconSvg}, data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },


  mounted() {
    // addEventListener('scroll', debounce(() => {
    //   console.log(this.$refs.detailNav.$el.offsetTop);
    // },50))
    // addEventListener('scroll',() => {
    //   console.log(this.$refs.detailNav.$el.offsetTop);
    // })
    // console.log(document.documentElement.scrollTop);
    // console.log(this.$refs.detailNav.$el.scrollTop);
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick',index)
    },
    backClick() {
      this.$router.go(-1)
    }
  },


}
</script>

<style scoped>
.detail-nav {
  display: flex;
}

.title-item {
  flex: 1
}

.active {
  color: var(--font-color);
}

.icon {
  margin-top: .6rem;
  margin-left: 1.2rem;
}
</style>
