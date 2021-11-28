import {request} from "@/network/requset";

export function getCategoryList(){
  return request({
    url:'http://152.136.185.210:7878/api/hy66/category'
  })
}

export function getCategoryContentList(categoryKey){
  return request({
    url:'http://152.136.185.210:7878/api/hy66/subcategory',
    params:{
      maitKey:categoryKey
    }
  })
}
