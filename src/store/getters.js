//
const getters = {
  token: (state) => {
    console.log(state.user.token)
    return state.user.token
  }
}
export default getters
