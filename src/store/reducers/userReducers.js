/* eslint-disable no-param-reassign */
export default function userReducers() {
  return {
    authorize(state) {
      state.authorized = true
    },
    unauthorize(state) {
      state.authorized = false
    },
  }
}
