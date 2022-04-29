import {request2} from "@/network/requset";

export function login({username,password}){
  return request2({
    url:'/user/findByUsername',
    method:'GET',
    params:{
      username,password
    }
  })
}
