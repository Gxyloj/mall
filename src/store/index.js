import {createStore} from 'vuex'

const state = {
  xb_name:'姓名',
}

export default createStore({
  state,
  mutations:{
    updateName(state,message){
      state.xb_name = message
    }
  }
})
