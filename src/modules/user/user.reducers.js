/* eslint-disable no-param-reassign */
export default function userReducers() {
  return {
    authorize(state, action) {
      state.requesting = true
      state.request = action.payload
      state.authError = null
    },
    authSuccess(state, action) {
      state.requesting = false
      state.request = null
      state.authorized = true
      state.authError = null
      state.info = action.payload
    },
    authError(state, action) {
      state.requesting = false
      state.request = null
      state.authorized = false
      state.authError = action.payload
      state.info = null
    },
    unauthorize(state) {
      state.requesting = false
      state.request = null
      state.authorized = false
      state.authError = null
      localStorage.clear()
    },
  }
}
