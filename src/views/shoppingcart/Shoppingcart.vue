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
      <van-checkbox v-model="item.checked"
                    checked-color="#ff8198"
                    class="checkbox"
                    style="width: 2rem"/>
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
          @deleteProduct="deleteProduct"
          @submit="submit"/>
<!--    <van-submit-bar :price="parseInt(totalPrice.toString()+'00'+'.00')" button-text="提交订单" @submit="onSubmit">-->
<!--      <van-checkbox v-model="isCheckAll"-->
<!--                    checked-color="#ff8198"-->
<!--                    class="checkbox" -->
<!--                    @click="switchCheckAll">全选</van-checkbox>-->

<!--    </van-submit-bar>-->

    <van-popup
      v-model:show="show"
      round
      position="bottom"
      :style="{ height: '40%' }"
    >
      <AddressList v-show="!addressIsChecked" @selectAddress="selectAddress"/>
      <div v-if="addressIsChecked">
        <div v-for="(item,index) in product" style="display: flex;background-color: #fafafa;">
          <van-card
            :num=item.count
            :price=item.price
            :title=item.title
            :thumb=item.image
            @click="switchChecked(index)"
          />

        </div>
        <van-radio-group v-model="pay" class="pay">
          <van-radio name="1" checked-color="#1573f7">支付宝支付</van-radio>
          <van-radio name="2" checked-color="#2aae67">微信支付</van-radio>
        </van-radio-group>
      </div>
      <van-submit-bar :price="totalPrice *100 " button-text="提交订单" @submit="onSubmit" />
    </van-popup>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ShoppingcartBottomBar from "@/views/shoppingcart/childComps/ShoppingcartBottomBar";
import utils from "@/common/utils/utils.ts";
import {findCartByUsername, updateCart,submitOrder} from "@/network/login";
import {getDetail} from "@/network/detail";
import AddressList from "@/views/address/AddressList";
import {ElMessage} from "element-plus";

export default {
  name: "Shoppingcart",
  components: {AddressList, NavBar, ShoppingcartBottomBar},
  data() {
    return {
      // checked: true,
      amount: 0,
      product: [],
      totalPrice: 0,
      isEditMode: false,
      isCheckAll: true,
      deleteList: [],
      cartLength: 0,
      show:false,
      addressIsChecked:false,
      pay:'1',
      order:{}
    }
  },
  computed: {},
  created() {
    // this.totalPriceChange()
    // console.log(this.$store.state.cartList)

  },
  activated() {
    this.getShoppingCart()
    setInterval(() => {
      if (this.product.length === this.cartLength) {
        this.isCheckedAll()
        this.totalPriceChange()
        clearInterval()
      }
    }, 100)


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
          // this.totalPrice = this.totalPrice * 100
          this.totalPrice.toFixed(2)
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
    isCheckedAll() {
      for (let item of this.product) {
        if (item.checked) {
          this.isCheckAll = true
        } else {
          this.isCheckAll = false
          break
        }
      }
    },
    deleteProduct() {
      // console.log('删除')
      //如果是全选的就都删
      if (this.isCheckAll) {
        this.product = []
        updateCart({username: utils.getCookie('username'), cart: []})
        this.totalPriceChange()
        this.isCheckedAll()
      } else {
        //如果不是 遍历一下选中的 添加到deleteList
        for (let item of this.product) {
          if (item.checked) {
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
        //       let newCart = []
        //       this.product.forEach(item => {
        //         console.log(item)
        //       })
        //
        //     }
        //   }
        // })
        //改一下product
        this.product = this.product.filter(item => {
          return this.deleteList.indexOf(item) === -1
        })
        let newCart = {
          username: utils.getCookie('username'),
          cart: []
        }
        this.product.forEach(item => {
          // console.log(item)
          newCart.cart.push({iid: item.iid, count: item.count})
        })
        updateCart(newCart)

      }


    },
    getShoppingCart() {
      if (utils.getCookie('username')) {
        console.log('登录了')
        this.product = []
        findCartByUsername(utils.getCookie('username')).then(res => {
          this.cartLength = res.length
          res.forEach(item => {
            getDetail(item.iid).then(detail => {
              this.product.push({
                checked: true,
                count: item.count,
                desc: detail.result.itemInfo.desc,
                iid: item.iid,
                image: detail.result.itemInfo.topImages[0],
                price: detail.result.itemInfo.lowNowPrice,
                title: detail.result.itemInfo.title
              })
            })

          })

        })

      } else {
        console.log('没登录 看看vuex')
        this.product = this.$store.state.cartList
      }
    },
    submit(){
      this.show = true
    },
    onSubmit(){
      //发起请求
      this.order.username = utils.getCookie('username')
      this.order.product = this.product
      this.order.pay = this.pay
      this.order.totalPrice = this.totalPrice
      submitOrder(this.order).then(res => {
        console.log(res)
        if (res.code === 200){
          ElMessage.success(res.message)
          this.product = []
          this.show = false
          updateCart({username: utils.getCookie('username'), cart: []})
          this.totalPriceChange()
          this.isCheckedAll()
        }
      })
    },
    selectAddress(item){
      // console.log(item)
      this.addressIsChecked = true

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

/*/deep/ .van-submit-bar {*/
/*  bottom: 45px;*/
/*}*/
.pay{
  padding-bottom: 60px;
  margin-left: 15px;
}

.van-radio{
  margin-bottom: 5px;
}
</style>
