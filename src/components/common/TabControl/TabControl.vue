<template>
  <div class="tab-control">

    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active:index === currentIndex}"
         @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
  <div class="nav-line">
    <div :style="{transform: 'translateX(' + translateX + 'px) translateX(-50%)',}"></div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    isActive() {

    }
  },
  data() {
    return {
      currentIndex: 0,
      translateX: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.setUnderLine();
      this.$emit('tabClick',index)
    },
    setUnderLine() {
      let width = document.documentElement.clientWidth;
      let slidingWidth = (width / this.titles.length).toFixed(2);
      let halfSlidingWidth = (slidingWidth / 2).toFixed(2);
      this.translateX = Number(halfSlidingWidth) + Number(slidingWidth * this.currentIndex);
    }
  },
  mounted() {
    this.setUnderLine();
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;

}

.tab-control-item >>> span {
  padding: 5px
}

.active {
  font-weight: bold;
  color: var(--font-color);
  transition: all 0.3s;
}


.nav-line > div {
  width: 18px;
  height: 4px;
  background-color: var(--font-color);
  border-radius: 2px;
  transition-duration: 0.3s;
  position: relative;
  top: -7px;
}
</style>
