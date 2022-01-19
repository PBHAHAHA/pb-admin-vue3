import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sys/user',
    method: 'POST'
  })
}

// 发布文章
export const addArticle = () => {
  return request({
    url: '/article/add',
    method: 'POST'
  })
}
