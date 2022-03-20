// import request from '@/utils/request';
import {request} from '@/plugins/axios-interceptors';

export const getTags = (params = {}) => {
  return request({
    method: 'get',
    url: '/api/tags',
    params
  })
}