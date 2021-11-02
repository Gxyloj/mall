<template>
  <div>

      <icon-svg icon-class="back-top" class="back-top" ></icon-svg>

  </div>
</template>

<script>
import iconSvg from "@/components/common/iconSvg";
export default {
  name: "BackTop",
  components:{iconSvg}
}
</script>

<style scoped>


.back-top{
  /*width: 100%;*/
  /*height: 100%;*/
  position: fixed;
  right: 15px;
  bottom: 53px;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
}
</style>
