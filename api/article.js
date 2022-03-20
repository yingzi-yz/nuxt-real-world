// import request from '@/utils/request';
import {request} from '@/plugins/axios-interceptors';

export const getArticles = (params = {}) => {
  return request({
    method: 'get',
    url: '/api/articles',
    params
  })
}

export const createArticle = (data = {}) => {
  return request({
    method: 'post',
    url: '/api/articles',
    data
  })
}

export const getArticleDetail = slug => {
  return request({
    method: 'get',
    url: `/api/articles/${slug}`,
  })
}