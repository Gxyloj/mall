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

    }
  },
  computed:{
    name:{
      get(){
        return this.$store.state.xb_name
      },
      set(value){
        this.$store.commit('updateName',value)
      }

    }
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
