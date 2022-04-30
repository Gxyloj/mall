<template>
  <div>
    <nav-bar style="background-color: #ff8198;color: #fff">
      <template v-slot:center>
        购物车({{ amount }})
      </template>
      <template v-slot:right>
        <span @click="editMode" v-show="!isEditMode">编辑</span>
        <span @click="editMode" v-show="isEditMode">退出</span>
      </template>
    </nav-bar>

    <div v-for="(item,index) in product" style="display: flex;background-color: #fafafa;">
      <van-checkbox v-model="item.checked" checked-color="#ff8198" class="checkbox" style="width: 2rem"/>
      <van-card
        :num=item.count
        :price=item.price
        :title=item.title
        :thumb=item.image
        @click="switchChecked(index)"
      />
    </div>

    <ShoppingcartBottomBar
      ref="bottom-bar"
      :amount="amount"
      :totalPrice="totalPrice"
      :isEditMode="isEditMode"
      :isCheckAll="isCheckAll"
      @switchCheckAll="switchCheckAll"
      @deleteProduct="deleteProduct"></ShoppingcartBottomBar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ShoppingcartBottomBar from "@/views/shoppingcart/childComps/ShoppingcartBottomBar";
import utils from "@/common/utils/utils.ts";
import {findCartByUsername} from "@/network/login";
import {getDetail} from "@/network/detail";

export default {
  name: "Shoppingcart",
  components: {NavBar, ShoppingcartBottomBar},
  data() {
    return {
      // checked: true,
      amount: 0,
      product: [],
      totalPrice: 0,
      isEditMode: false,
      isCheckAll:true,
      deleteList:[]
    }
  },
  computed: {},
  created() {
    this.totalPriceChange()
    // console.log(this.$store.state.cartList)

  },
  activated() {
    let promise = new Promise(resolve => {
      if (utils.getCookie('username')){
        console.log('登录了')
        this.product = []
        findCartByUsername(utils.getCookie('username')).then(res => {
          res.forEach(item => {
            getDetail(item.iid).then(detail => {
              this.product.push({
                checked:true,
                count:item.count,
                desc:detail.result.itemInfo.desc,
                iid:item.iid,
                image:detail.result.itemInfo.topImages[0],
                price:detail.result.itemInfo.lowNowPrice,
                title:detail.result.itemInfo.title
              })
            })

          })
        })
        resolve()
      }else {
        console.log('没登录 看看vuex')
        this.product = this.$store.state.cartList
        resolve()
      }
    })
    promise.then(() => {
      this.totalPriceChange()
      this.isCheckedAll()
    })



  },
  methods: {
    switchChecked(index) {
      this.product[index].checked = !this.product[index].checked
      this.totalPriceChange()
      this.isCheckedAll()

    },
    totalPriceChange() {
      this.totalPrice = 0
      this.amount = 0
      for (let item of this.product) {
        if (item.checked) {
          this.totalPrice += (item.count * item.price)
          this.amount++
        }
      }
    },
    editMode() {
      this.isEditMode = !this.isEditMode
    },
    switchCheckAll(isCheckAll) {
      // console.log(isCheckAll)
      if (isCheckAll) {
        for (let item of this.product) {
          item.checked = true
        }
      } else {
        for (let item of this.product) {
          item.checked = false
        }
      }
    },
    isCheckedAll(){
      for (let item of this.product){
        if (item.checked) {
          this.isCheckAll = true
        }
        else {
          this.isCheckAll = false
          break
        }
      }
    },
    deleteProduct(){
      // console.log('删除')
      for (let item of this.product){
        if (item.checked){
          this.deleteList.push(item)
        }
      }

      // this.product.forEach((item,index) => {
      //   for (let del of this.deleteList){
      //     if (item.iid === del.iid){
      //       // console.log(index)
      //       this.product.splice(index,1)
      //       console.log('删除');
      //       this.totalPriceChange()
      //       this.isCheckedAll()
      //     }
      //   }
      // })//卡得批爆

    }



  },

}
</script>

<style scoped>
::v-deep .van-card {
  padding: 8px;
  /*white-space: nowrap;*/
  /*text-overflow: ellipsis;*/
  /*overflow: hidden;*/


}
</style>
