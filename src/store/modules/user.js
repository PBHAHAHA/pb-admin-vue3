// import { login, getUserInfo } from '@/api/sys'
import { login } from '@/api/sys'
// import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then((res) => {
            console.log(res)
            context.commit('setToken', res.data.token)

            resolve()
          })
          .catch((err) => {
            // context.commit('setToken', '测试token')
            reject(err)
          })
      })
    },
    async getUserInfo(context) {
      // const res = await getUserInfo()
      context.commit('setUserInfo', {
        name: '购商云汇',
        userid: 'ceshi123'
      })
    }
  }
}
