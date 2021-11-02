<template>
  <div class="profile">
    <button @click="xiaobei" :name="name"></button>
  </div>
</template>

<script>
export default {
  name: "WorkBench",
  methods:{
    xiaobei(){
      this.$router.push('/xiaobei/' + this.name)
    }
  },
  data(){
    return{
      name:''
    }

  },
  created() {
    this.name = this.$route.params.name
    console.log(this.name);
  }
}
</script>

<style scoped>
.profile{
  height: 100vh;
  background-size: contain;
  background-image: url("../../assets/img/xb_bg.jpg");
}
button{
  opacity: 0;
  position: absolute;
  width: 200px;
  height: 100px;
  border: none;
  bottom: 13vh;
}
</style>
