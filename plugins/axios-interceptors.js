// import request from '@/utils/request'
import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

export default ({ store }) => {
  request.interceptors.request.use(config => {
    const { user } = store.state;
    if (user) {
      config.headers['Authorization'] = `Token ${user.token}`;
    }
    return config;
  }, err => {
    return Promise.reject(err);
  })
  
  request.interceptors.response.use(response => {
    return response;
  }, err => {
    return Promise.reject(err);
  })
}



