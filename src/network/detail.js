import {request} from "@/network/requset";

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
