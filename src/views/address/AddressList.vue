<template>
  <van-address-list
    v-model="chosenAddressId"
    :list="addressList"
    @add="this.$router.push('/editAddress')"
    @edit="onEdit"
    @select="selectAddress"
  />
</template>

<script>
import {getAddressList} from "@/network/address";
import utils from "@/common/utils/utils.ts";

export default {
  name: "AddressList",
  data(){
    return {
      chosenAddressId:NaN,
      addressList:[]
    }
  },
  created() {
    this.getAddressList()
  },
  methods:{
    getAddressList(){
      getAddressList(utils.getCookie('username')).then(res => {
        this.addressList = res
        this.addressList.forEach(item => {
          item.address = item.province + item.city + item.county
          item.id = item.id + ''
        })
      })
    },
    onEdit(){
      this.$toast.success(`编辑ID为${this.chosenAddressId}的地址`)
    },
    selectAddress(item){
      // console.log(item)
      this.$emit('selectAddress',item)
    }
  }
}
</script>

<style scoped>

</style>
