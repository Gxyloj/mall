import {request} from "@/network/requset";

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
