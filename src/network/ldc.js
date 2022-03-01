import {request1} from "@/network/requset";
import qs from "qs";

export function savaData(data) {
  console.log(data)
  let _data = qs.stringify(data)
  return request1({
    url: '/ldc/saveData',
    method: 'post',
    data:
      _data
      // weekOrderSum:data.weekOrderSum,
      // totalOrder:data.totalOrder,
      // totalPrice:data.totalPrice

  })
}
