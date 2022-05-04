<template>
  <van-address-edit
    :area-list="areaList"
    show-postal
    show-search-result
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
  />

</template>

<script>
import {areaList} from '@vant/area-data'
import utils from "@/common/utils/utils.ts";
import {addAddress} from "@/network/address";
import {ElMessage} from "element-plus";
export default {
  name: "Address",
  data(){
    return {
      areaList
    }
  },
  methods:{
    onSave(data){
      let address = {
        username:utils.getCookie('username'),
        tel:data.tel,
        name:data.name,
        province:data.province,
        city:data.city,
        county:data.county,
        postalCode:data.postalCode,
      }
      addAddress(address).then(res => {
        if (res.code !== 200 )return ElMessage.error('添加失败')
        ElMessage.success(res.message)
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style scoped>

</style>
