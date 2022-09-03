/* eslint-disable no-param-reassign */
export default function videoReducers() {
  return {
    post(state, action) {
      state.requesting = true
      state.request = action.payload
      state.postError = null
    },
    postSuccess(state, action) {
      state.requesting = false
      state.request = null
      state.postError = null
      state.info = action.payload
    },
    postError(state, action) {
      state.requesting = false
      state.request = null
      state.postError = action.payload
      state.info = null
    },
  }
}
