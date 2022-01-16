<template>
  <div>
    {{message.time}}
    <button @click="copy"></button>
  </div>
</template>

<script>
export default {
  name: "ldc",
  data(){
    return{
      message:{
        time:''
      }
    }
  },
  created() {
    this.getDate()
  },
  methods:{
    getDate() {
      const date = new Date();
      const seperator1 = "-";
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      // return year + " 年 " + month + " 月 " + strDate + " 日 ";
      this.message.time = year + " 年 " + month + " 月 " + strDate + " 日 "
    },
    copy(){

    }
  }
}
</script>

<style scoped>

</style>
