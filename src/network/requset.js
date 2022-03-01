import axios from "axios";
import {stringify} from 'qs';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
      return config
    }, error => {

    }
  )

  instance.interceptors.response.use(res => {
      return res.data
    }, error => {
      console.log(error);
    }
  )

  return instance(config)
}

export function request1(config) {
  const instance = axios.create({
    // baseURL: 'http://localhost:8092',
    baseURL:'http://gxyloj.eicp.net:8092',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {

      return config
    }, error => {
      console.log(error);
    }
  )

  instance.interceptors.response.use(res => {
      return res.data
    }, error => {
      console.log(error);
    }
  )

  return instance(config)
}
