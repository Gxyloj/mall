<template>
  <!--  <div class="a" v-for="item in ls.splice(0,10)">{{item}}</div>-->
  <div class="b">
    <div class="c">
      <pre v-for="item in ls" class="a">{{ item }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "0303",
  data() {
    return {
      ls: []
    }
  },
  mounted() {
    let level = 15;
    let rootLevel = 2;
    let spaceNum = level - 1;
    for (let i = 1; i <= level; i++) {
      spaceNum--;
      for (let g = 0; g <= spaceNum; g++) {
        this.ls.push(" ")
      }
      for (let j = 1; j <= ((i * 2) - 1); j++) {
        this.ls.push("*")
      }
      this.ls.push("\n")
    }
    this.ls.push('            嘻嘻嘻')
    this.ls.push("\n")
    this.ls.push('              一')
    this.ls.push("\n")
    this.ls.push('              颗')
    this.ls.push("\n")
    this.ls.push('              简')
    this.ls.push("\n")
    this.ls.push('              单')
    this.ls.push("\n")
    this.ls.push('              的')
    this.ls.push("\n")
    this.ls.push('              圣')
    this.ls.push("\n")
    this.ls.push('              诞')
    this.ls.push("\n")
    this.ls.push('              树')
  }
}
</script>

<style scoped>
.a {

  display: inline;
}

.c {
  position: relative;
  left: 16vw;
  top: 20vh;
  /*background-color: red;*/
}
</style>
