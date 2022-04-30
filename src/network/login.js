import {request2} from "@/network/requset";
import qs, {stringify} from "qs";

export function login({username, password}) {
  return request2({
    url: '/user/findByUsername',
    method: 'GET',
    params: {
      username, password
    }
  })
}

export function pushCart(data) {
  // console.log(data)
  // let _data = qs.stringify(data)
  let _data = JSON.stringify(data)
  // console.log(JSON.stringify(data));
  // console.log(_data)
  return request2({
    url: '/cart/saveCart',
    method:'post',
    data:
      _data

  })
}

export function findCartByUsername(username){
  return request2({
    url:'/cart/findCart',
    method:'get',
    params:{
      username
    }
  })
}
