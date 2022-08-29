/* eslint-disable no-param-reassign */
export default function allUsersReducers() {
  return {
    request(state) {
      state.requesting = true
    },
    requestSuccess(state, action) {
      state.requesting = false
      state.requestError = null
      state.info = action.payload
    },
    requestError(state, action) {
      state.requesting = false
      state.requestError = action.payload.error.toString()
      state.info = null
    },
  }
}
