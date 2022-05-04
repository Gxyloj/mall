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

export function addCart(data) {
  // console.log(data)
  // let _data = qs.stringify(data)
  let _data = JSON.stringify(data)
  // console.log(JSON.stringify(data));
  // console.log(_data)
  return request2({
    url: '/cart/addCart',
    method: 'post',
    data:
    _data

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
    method: 'post',
    data:
    _data

  })
}

export function findCartByUsername(username) {
  return request2({
    url: '/cart/findCart',
    method: 'get',
    params: {
      username
    }
  })
}

export function updateCart(data) {
  console.log('-----')
  let _data = JSON.stringify(data)
  return request2({
    url:`/cart/update`,
    method:'post',
    data:_data
  })
}

export function register(data){
  return request2({
    url:`/user/saveOrUpdate`,
    method:'post',
    data:JSON.stringify(data)
  })
}


export function submitOrder(data){
  // console.log(data)
  return request2({
    url:`/order/save`,
    method:'post',
    data:JSON.stringify(data)
  })
}

export function getOrderList(username){
  return request2({
    url:'/order/get',
    method:'get',
    params:{username}
  })
}
