import {request2} from "@/network/requset";

export function addAddress(data){
  return request2({
    url:`/address/add`,
    method:'post',
    data:JSON.stringify(data)
  })
}

export function getAddressList(username){
  return request2({
    url:'/address',
    method:'GET',
    params: { username}
  })
}
