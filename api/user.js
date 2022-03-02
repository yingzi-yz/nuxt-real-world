import request from '@/utils/request';

export const register = (data = {}) => {
  return request({
    method: 'post',
    url: '/api/users',
    data
  })
}