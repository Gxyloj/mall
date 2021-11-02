<template>
  <div class="profile">
    <button @click="xiaobei" :name="name"></button>
  </div>
</template>

<script>
import Profile from "@/views/profile/Profile";
export default {
  name: "WorkBench",
  components: {Profile},
  methods:{
    xiaobei(){
      this.$router.push('/xiaobei')
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
  background-size: 100vw auto;
  background-image: url("../../assets/img/xb_bg.jpg");
}

button{
  opacity: 1;
  position: absolute;
  width: 250px;
  height: 150px;
  border: none;
  bottom: 13vh;
}
</style>
