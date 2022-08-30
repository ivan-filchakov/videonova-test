/* eslint-disable no-param-reassign */
export default function modalReducers() {
  return {
    toggle(state, action) {
      state.isOpen = action.payload
      if (!state.isOpen) state.content = null
    },
    placeContent(state, action) {
      state.isOpen = true
      state.content = action.payload
    },
    close(state) {
      state.isOpen = false
    },
  }
}
