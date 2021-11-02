<template>
  <div class="profile">
    <input type="text"  v-model="name">
    <button @click="click">GO</button>
  </div>

</template>

<script>

export default {
  name: "Profile",
  data(){
    return{
      name:'姓名',
    }
  },
  methods:{
    click(){
      this.$router.push('/workbench/' + this.name)
    }
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
