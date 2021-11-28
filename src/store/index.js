import {createStore} from 'vuex'

const state = {
  cartList: []
}

export default createStore({
  state,
  mutations: {
    // addCart(state,payload){
    // let oldProduct = null
    // for (let item of state.cartList){//遍历现有购物车
    //   if (item.iid === payload.iid){//如果payload的商品iid和现有的一致
    //     oldProduct = item           //把现有的那样商品赋值给oldProduct
    //   }
    // }

    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //
    //   if (oldProduct){
    //     oldProduct.count += 1       //如果oldProduct有值，即传入的payload商品已经在购物车里，件数+1
    //   }
    //   else {
    //     payload.count =1  //否则件数=1
    //     state.cartList.push(payload) //并把数据加入store中的购物车cartList
    //   }
    // }
    addCounter(state, payload) {
      payload.count++

    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }


  },
  actions: {
    addCart(context, payload) {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
      }
      else{
        payload.count = 1
        context.commit('addToCart',payload)
      }
    }
  }
})
