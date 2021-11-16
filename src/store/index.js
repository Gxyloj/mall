import {createStore} from 'vuex'

const state = {
  xb_name:'姓名',
  navIndex:0,
}

export default createStore({
  state,
  mutations:{
    updateName(state,message){
      state.xb_name = message
    },
    navIndexChange(state,index){
      state.navIndex = index
    }
  }
})
