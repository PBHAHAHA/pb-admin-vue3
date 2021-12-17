import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  // 用户已登录则不允许进入login
  // 用户未登录则只允许进入login
  console.log(store)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在，如果不存在，则获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
