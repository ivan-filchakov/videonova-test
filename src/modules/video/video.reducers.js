/* eslint-disable no-param-reassign */
export default function videoReducers() {
  return {
    post(state, action) {
      state.requesting = true
      state.request = action.payload
      state.postSuccess = null
      state.postError = null
    },
    postSuccess(state, action) {
      state.requesting = false
      state.request = null
      state.postSuccess = true
      state.postError = null
      state.info = action.payload
    },
    postError(state, action) {
      state.requesting = false
      state.request = null
      state.postSuccess = null
      state.postError = action.payload
      state.info = null
    },
    resetPostSuccess(state) {
      state.requesting = false
      state.postSuccess = null
      state.request = null
      state.postSuccess = null
      state.postError = null
    },
  }
}
