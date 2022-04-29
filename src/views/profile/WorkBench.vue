<template>
  <div class="profile">
    <button @click="xiaobei" :name="name"></button>
  </div>
</template>

<script>
import Profile from "@/views/profile/Profile1";
export default {
  name: "WorkBench",
  components: {Profile},
  props:{
    name:{
      type:String
    }
  },
  methods:{
    xiaobei(){
      this.$router.push('/xiaobei')
    }
  },
  data(){
    return{

    }

  },

}
</script>

<style scoped>
.profile{
  height: 100vh;
  background-size: 100vw auto;
  background-image: url("../../assets/img/xb_bg.jpg");
}

button{
  opacity: 0;
  position: absolute;
  width: 250px;
  height: 150px;
  border: none;
  bottom: 13vh;
}
</style>
