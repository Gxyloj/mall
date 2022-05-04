<template>
  <div class="bottom-bar">
    <van-checkbox v-model="isCheckAll"
                  checked-color="#ff8198"
                  class="checkbox"
                  @click="switchCheckAll">全选</van-checkbox>
    <p>合计：￥{{totalPrice}}</p>
    <button class="settlement" v-show="!isEditMode" @click="submit">结算({{amount}})</button>
    <button class="settlement"
            v-show="isEditMode"
            :style="{backgroundColor:(isEditMode?bgc:'#ff4500')}"
            @click="deleteProduct">
      删除({{amount}})
    </button>
  </div>
</template>

<script>

import {ref} from "vue";

export default {
  name: "ShoppingcartBottomBar",
  props:{
    amount:{
      type:Number,
    },
    totalPrice:{
      type:Number
    },
    isEditMode:{
      type:Boolean,

    },
    isCheckAll:{
      type:Boolean
    }
  },
  data(){
    return{
      bgc:'#ff4500'
    }
  },
  methods:{
    switchCheckAll(){
      // console.log(this.checkAll)
      this.$emit('switchCheckAll',this.isCheckAll)
    },
    deleteProduct(){
      this.$emit('deleteProduct')
    },
    submit(){
      this.$emit('submit')
    }
  }

}
</script>

<style scoped>

.bottom-bar {
  height: 50px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 43px;
  background-color: #eee;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, .15);

}

.settlement {
  height: 100%;
  width: 100px;
  position: absolute;
  right: 0;
  border: none;
  /*background-color: #ff4500;*/
  background-color: #ffa000;

  color: #fff;
}
p{
  margin-left: 10px;
}

::v-deep .van-checkbox__label{
  font-size: .8rem;
  color: #666;
}
</style>
