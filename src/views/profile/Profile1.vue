<template>
  <div class="profile">
    <input type="text"  v-model="name">
    <button @click="click" :name="name">GO</button>
    <work-bench v-show="false"></work-bench>
  </div>

</template>

<script>
import WorkBench from "@/views/profile/WorkBench";
export default {
  name: "Profile1",
  components:{WorkBench},
  data(){
    return{
      name:'姓名'
    }
  },
  computed:{
    // name:{
    //   get(){
    //     return this.$store.state.xb_name
    //   },
    //   set(value){
    //     this.$store.commit('updateName',value)
    //   }
    //
    // }
  },
  methods:{
    click(){
      this.$router.push('/workbench')
    },

  },
  created() {
    console.log(this.name);
  }
}
</script>

<style scoped>
.profile{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Helvetica;
  background-color: #eee;
}

</style>
