<template>
  {{info}}
</template>

<script>
import utils from "@/common/utils/utils.ts";

export default {
  name: "Profile",
  created() {
    this.info.username = JSON.parse(utils.getCookie('username'))
  },
  data(){
    return{
      info:{
        username:''
      }
    }
  },
}
</script>

<style scoped>

</style>
