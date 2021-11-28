<template>
  <van-sticky>
    <nav-bar style="background-color:#ff8198;color: #fff">
      <template v-slot:center>
        分类
      </template>
    </nav-bar>
  </van-sticky>

  <van-tree-select
    v-model:main-active-index="activeIndex"
    height="100vh"
    :items="items"
    @click-nav="clickNav(activeIndex)"
  >
    <template #content>
      <tab-content-category
        :activeIndex="activeIndex"
        :categoryKey="categoryKey"
        :contentList="contentList"></tab-content-category>
    </template>
  </van-tree-select>

</template>

<script>
import {getCategoryContentList, getCategoryList} from "@/network/category";
import TabContentCategory from "@/views/category/childComps/TabContentCategory";
import NavBar from "@/components/common/navbar/NavBar";
import {ref} from "vue";

export default {
  name: "Category",
  components: {TabContentCategory, NavBar},
  data() {
    return {
      activeIndex: 0,
      categoryKey: 3627,
      items: [],
      contentList: []
    }
  },
  created() {
    getCategoryList().then(res => {

      res.data.category.list.forEach((i, index) => {
        // console.log(i)
        this.items.push({text: '', categoryKey: ''})
        this.items[index]['text'] = i.title
        this.items[index]['categoryKey'] = i.maitKey
        // console.log(this.items[index]['text'])
        // console.log(index);
        // console.log(i.title);
      })
    })
    getCategoryContentList(this.categoryKey).then(res => {
      console.log(res);
      this.contentList = res.data.list
    })
  },
  methods: {
    clickNav(activeIndex) {
      // console.log('点击左侧',activeIndex);
      // console.log(this.items[activeIndex]['categoryKey']);
      this.categoryKey = this.items[activeIndex]['categoryKey']
      getCategoryContentList(this.categoryKey).then(res => {
        this.contentList = res.data.list
      })
    }
  }
}
</script>

<style scoped>
::v-deep .van-sidebar-item--select::before {
  width: 3px;
  height: 100%;
  background-color: #ff8198;
}

</style>
