/* eslint-disable no-param-reassign */
export default function userReducers() {
  return {
    authorize(state) {
      state.requesting = true
      // state.authorized = true
    },
    authSucces(state, action) {
      state.requesting = false
      state.authorized = true
      state.info = action.payload.info
      state.authError = null
    },
    authError(state, action) {
      state.requesting = false
      state.authorized = false
      state.userInfo = null
      state.authError = action.payload.error.toString()
    },
    unauthorize(state) {
      state.requesting = false
      state.authorized = false
      state.authError = null
    },
  }
}
