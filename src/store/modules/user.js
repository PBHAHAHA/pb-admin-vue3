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
      console.log(userInfo)
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then((res) => {
            console.log(res)
            if (res.data.token) {
              context.commit('setToken', res.data.token)
            }
            resolve()
          })
          .catch((err) => {
            console.log(err)
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
