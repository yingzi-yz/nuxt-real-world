// import request from '@/utils/request';
import {request} from '@/plugins/axios-interceptors';

export const register = (data = {}) => {
  return request({
    method: 'post',
    url: '/api/users',
    data
  })
}

export const login = (data = {}) => {
  return request({
    method: 'post',
    url: '/api/users/login',
    data
  })
}