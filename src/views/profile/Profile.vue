<template>
  <div class="profile">
    <button @click="xiaobei"></button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods:{
    xiaobei(){
      this.$router.push('/xiaobei')
    }
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
