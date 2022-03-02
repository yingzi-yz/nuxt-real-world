import request from '@/utils/request';

export const getTags = (params = {}) => {
  return request({
    method: 'get',
    url: '/api/tags',
    params
  })
}